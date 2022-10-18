import React, { useState } from 'react';
import styled from "styled-components"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { signup } from '../Actions/auth'
import LoadingIcons from 'react-loading-icons'

function Register({signup, auth}) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) =>{
    e.preventDefault()
    const inputUsername = e.target.value
    setUsername(inputUsername)
  }

  const handleEmail = (e) =>{
    e.preventDefault()
    const inputEmail = e.target.value
    setEmail(inputEmail)
  }

  const handlePassword = (e) =>{
    e.preventDefault()
    const inputPassword = e.target.value
    setPassword(inputPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signup({username, email, password})
      setUsername("")
      setEmail("")
      setPassword("")
  }

  return (
   <Container>
     <Card>
       <h1>Register</h1>
       <AccountIcon />

       <br />
       <br />
       <input placeholder='USERNAME' value={username} type="text" onChange={handleUsername} required />
       <br />
       <br />
       <input placeholder='EMAIL' value={email} type="email" onChange={handleEmail} required />
       <br /> 
       <br />
       <input placeholder='PASSWORD' value={password} type="password" required onChange={handlePassword} />
       <br />
       <br />
        
        <button onClick={handleSubmit}>
        {auth.isLoading ? (
          <LoadingIcons.Oval Height="2em" />
        ):(
          <p>SignUp</p>
        )}
        </button>
        <p>Already have an account? <Link to="/login">click here to login</Link></p>
        
       
     </Card>
   </Container>
  );
}

const mapStateToProps = state => {
  return{
      auth: state.auth
  }
  
}

const mapDispatchToProps = {
  //logout,
  signup
  //productCountAPI
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)

const Container = styled.div`
  position: relative;
  margin-top: 10%;
  background-color: red;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  background: #f7f5f5;
  margin: auto;
  border: none;
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
        color: #011566;
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
