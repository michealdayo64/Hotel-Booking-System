import React, { useState } from 'react';
import styled from "styled-components"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux';
import LoadingIcons from 'react-loading-icons'
import { login } from '../Actions/auth';

function Login({login, auth, props}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const handleUsername = (e) =>{
    e.preventDefault()
    const inputUsername = e.target.value
    setUsername(inputUsername)
  }

  const handlePassword = (e) =>{
    e.preventDefault()
    const inputPassword = e.target.value
    setPassword(inputPassword)
  }

  const errorMessage = () => {
    if(auth.loginFail){
      setShow(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login({username, password})
    errorMessage();
      setUsername("")
      setPassword("")
      

      
  }

  if(auth.isAuthenticated){
    return <Redirect to="/" />
  }


  return (
   <Container>

     <Card>
       <h1>Login</h1>
       <AccountIcon />

       <br />
       <br />
       <input placeholder='USERNAME' value={username} type="text" onChange={handleUsername} required />
       <br /> 
       <br />
       <input placeholder='PASSWORD' type="password" value={password} required onChange={handlePassword} />
       <br />
       <br />
        <button onClick={handleSubmit}>
        {auth.isLoading ? (
          <LoadingIcons.Oval Height="2em" />
        ):(
          <p>Login</p>
        )}
        </button>
        <p>Not a member yet? <Link to="/register">click here to register</Link></p>
        <i>forget password</i>
        
     </Card>
     <LoginMessage show = {show}>
     <p>{auth.loginFail}</p>
     </LoginMessage>
   </Container>
  );
}



const mapStateToProps = state => {
    console.log(state.auth.loginFail)
  return{
      auth: state.auth
  }
  
}

const mapDispatchToProps = {
  login
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

const Container = styled.div`
  position: relative;
  margin-top: 10%;
  //background-color: red;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 400px;
  height: 450px;
  background: #f7f5f5;
  margin: auto;
  border: none;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 2px 8px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px 8px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 8px 5px 0px rgba(0,0,0,0.75);

    h1{
      color: #011566;
    }

    input{
      height: 40px;
      width: 300px;
      border-radius: 10px;
      //border: none;
    }

    button{
      height: 40px;
      width: 300px;
      border-radius: 10px;
      border: none;
      background: #011566;
      color: white;
      font-weight: 600;
      &:hover{
        background: white;
        transition: transform 0.5s ease-in;
        cursor: pointer;
        p{
          color: #011566;
        }
      }

      p{
        color: white;
      }
    }

    i{
      color: red;
      border-bottom: 1px solid red;
    }

    a{
      color: red;
      border-bottom: 1px solid red;
    }

    p{
      color: black;
    }
`

const AccountIcon = styled(AccountCircleIcon)`
  color: red;
  size: 100;
`

const LoginMessage = styled.div`
  background-color: red;
  color: white;
  width: 200px;
  margin-top: 60px;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  display: ${props => props.show ? "block" : "none"};
`
