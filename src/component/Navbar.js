import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import  DehazeIcon from '@material-ui/icons/Dehaze';
import { connect } from 'react-redux';
import { logout } from '../Actions/auth'


function Navbar({connectWallet, auth, logout}){
    const[sideBar, setSidebar] = useState(false)

  
    return(
        <Container>
                <Wrap>
                    <Link to="/"><h2>My Hotels</h2></Link>
                <RightMenu>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/hotel-list"><p>List of Rooms</p></Link>
                    <Link to="/dapp"><p>Dapp</p></Link>
                    <p>Contact</p>
                    <p>About</p>
                    <img src="/images/account.png" alt="" />
                        {auth.isAuthenticated ? 
                        (
                            <Link to="/"><button onClick={() => logout()}>Logout</button></Link>
                        ):(
                            <button><Link to="/login">Login</Link></button>
                        )
                        }
                        <button onClick={connectWallet}>Connect</button>
                </RightMenu>
                
                    <MyNavIcon onClick={() => setSidebar(true)}>
                    <DehazeIcon />
                    </MyNavIcon>
            
                    <MenuBar show={sideBar}>
                        <MenuIconClose onClick={() => setSidebar(false)}>
                            <CloseIcon />
                        </MenuIconClose>
                        
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/hotel-list">List of Rooms</Link></li>
                        <li><Link to="/dapp">Dapp</Link></li>
                        <li>Contact</li>
                        <li>About</li>
                    </MenuBar>
                

                </Wrap>
            </Container>
    )
}

const mapStateToProps = state => {
    return{
        auth: state.auth
    }
    
  }

  const mapDispatchToProps = {
    logout
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

const Container = styled.div`
    position: fixed;
    z-index: 100;
    background-color: black;
    width: 100%;
    height: 80px;
    color: white;
    top: 0;
    left: 0;
    right: 0;

    
`

const Wrap = styled.div`
    color: grey;
    display: flex;
    justify-content: space-between;
    //background: red;
    width: 1400px;
    margin: 0 auto;
    position: relative;

    @media(max-width: 768px){
        width: 450px;
        display: flex;
        align-items: center;
    }
`

const RightMenu = styled.div`
    color: grey;
    display: flex;
    align-items: center;
    //background: red;
    //position: fixed;
    
    
    p{
        margin-right: 20px;
        &:hover{
            //border-bottom: 1px solid blue;
            cursor: pointer;
        }
    }

    button{
        background: white;
        height: 30px;
        width: 100px;
        
        border-radius: 5px;

        a{
            color: black;
            font-weight: 600;
        }
    }

    img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-right: 5px;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const MyNavIcon = styled.div`
    @media(min-width: 768px){
        display: none;
        align-items: center;
        &:hover{
            //border-bottom: 1px solid blue;
            cursor: pointer;
        }
    }

    @media(max-width: 768px){
        display: block;
        align-items: center;
        &:hover{
            //border-bottom: 1px solid blue;
            cursor: pointer;
        }
    }

`

const MenuBar = styled.div`
    background: white;
    padding: 20px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    display: flex;
    text-align: start;
    flex-direction: column;
    transform: ${props=> props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.5s ease-in;
    z-index: 100;

    li{
        list-style: none;
        border-bottom: 1px solid grey;
        padding: 10px;
        cursor: pointer;
        color: black;
        font-weight: 600;
        a{
            
            color: black;
        }
    }
`

const MenuIconClose = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`