//import logo from './logo.svg';
//import './App.css';
import React, { useState, useEffect } from 'react'
import Dapp from './component/Dapp'
import Navbar from './component/Navbar'
import Web3 from 'web3';
//import { useWeb3React } from "@web3-react/core";
//import { injected } from "./constant/wallet";
//import web3 from "web3";
import Decentagram from './abis/Decentagram.json'
import { create } from "ipfs-http-client";
import {
  BrowserRouter as 
  Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home';
import ListHotel from './component/ListHotel'
import RoomDetail from './component/RoomDetail';
import Login from './component/Login';
import Register from './component/Register';
import store from './store'
import { loadUser } from "./Actions/auth"
import { connect } from 'react-redux'
import styled from "styled-components"
import LoadingIcons from 'react-loading-icons'
import { listHotel } from './Actions/hotels'


const client = create('https://ipfs.infura.io:5001/api/v0');

function App({auth, listHotel}) {

  

  const [account, setAccount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  //const [isConnected, setIsConnected] = useState(true)
  const [decentagram, setDecentragram] = useState()
  const [imageCount, setImageCount] = useState(0)
  const [images, setImages] = useState([])
  const [buffer, setBuffer] = useState()

const connectWallet = async() =>{
  const{ ethereum } = window;
  if(!ethereum){
    alert("Please connect Metamask")
  }
  try{
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setAccount(accounts[0])
  }catch(err){
    console.log(err)
  }
  //setIsConnected(true)
}

   const loadBlockChainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const networkId = await web3.eth.net.getId()
    console.log(networkId)
    const contractAddress = Decentagram.networks[networkId]
    //setIsLoading(isLoading)
    if(contractAddress){
      const decentag = new web3.eth.Contract(Decentagram.abi, contractAddress.address)
      setDecentragram(decentag)
      //console.log(decentagram)
      const count = await decentag.methods.numCount().call()
      setImageCount(count)
      for(var i = 1; i<= count; i++){
        const image = await decentag.methods.images(i).call()
        setImages(prev=> [...prev, image])
             }
      //setIsLoading(!isLoading)
    }else{
        window.alert("No contract detected for this network id")
    }
    //window.location.reload()
   }

   useEffect(() => {
    //loadWeb3()
    store.dispatch(loadUser())
    loadBlockChainData()
    listHotel()
   }, [])

  const captureFile = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
   //console.log(reader)
    reader.onloadend = () =>{
      setBuffer(Buffer(reader.result))
      //console.log('buffer', Buffer(reader.result))
    }
  }

  const uploadImage = async (title, description) => {
    console.log('The file will be Submitted!');
    let data = buffer;
    //console.log('Submit this: ', data);
    if (data){
      try{
        const postResponse = await client.add(data) 
        console.log("postResponse", postResponse.path);
        setIsLoading(isLoading)
       decentagram.methods.addImage(postResponse.path, title, description).send({from: account}).on('transactionHash', (hash) =>{
         setIsLoading(!isLoading)
       })
      } catch(e){
        console.log("Error: ", e)
      }
    } else{
      alert("No files submitted. Please try again.");
      console.log('ERROR: No data to submit');
    }
    //window.location.reload()
  }

  return (
        <>
        <div>
          {auth.isLoading ?(
            <Container>
            <LoadingIcons.Bars />
            </Container>
          ):(
            <Router>
        <Navbar connectWallet={connectWallet} />
        <Switch>
        
          <Route exact path="/">
          
            <Home />
            </Route> 

          <Route exact path="/dapp">
          
            <Dapp captureFile={captureFile} uploadImage={uploadImage} images={images} />
            </Route>

          <Route exact path="/hotel-list">
          
            <ListHotel />
            </Route>

            <Route exact path="/hotel-list/:id">
          
            <ListHotel />
            </Route>

          <Route exact path="/room-detail">
          
            <RoomDetail />
            </Route>
            
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          
          </Switch>
          
        </Router>
          )
          
          }
        </div>
        </>
        
        
      
  )
}

const mapStateToProps = state => {

  return{
      auth: state.auth
  }
  
}

const mapDispatchToProps = {
  loadUser,
  listHotel
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

const Container = styled.div`
    height: 100vh;
    background: blue;
`


/*

*/