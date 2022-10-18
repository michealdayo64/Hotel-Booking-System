//import React from 'react'
import styled from 'styled-components'
import WifiIcon from '@material-ui/icons/Wifi';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AirplayIcon from '@material-ui/icons/Airplay';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CalendarContainer = styled.div`
    //width: 400px;
`

function RoomDetail() {
    const [startDate, setStartDate] = useState(new Date());
    const [endtDate, setEndtDate] = useState(new Date());


    const MyContainer = ({ className, children }) => {
        return (
          <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
            <CalendarContainer className={className}>
              <div style={{ background: "#f0f0f0" }}>
                What is your favorite day?
              </div>
              <div style={{ position: "relative" }}>{children}</div>
            </CalendarContainer>
          </div>
        );
      };
    
    return (
        <Container>
            <Wrapper>
                <Wrap1>
                    <ImageWrap>
                        <img src="/images/resort.jpg" alt='' />
                    </ImageWrap>
                    <ListImages>
                    <img src="/images/resort.jpg" alt='' />
                    <img src="/images/resort.jpg" alt='' />
                    <img src="/images/resort.jpg" alt='' />
                    <img src="/images/resort.jpg" alt='' />
                    </ListImages>
                    <soan>Hotel:</soan><span><p>Quilox</p></span>
                    <h1>$500,000.00</h1>
                    <AddressRoom>
                        <Address>
                        <h3>253 west 109th Street</h3>
                        <h4>Lagos Island</h4>
                        </Address>
                        <RoomFac>
                        <IconText>
                            <span>hello</span>
                            <WifiIcon />
                        </IconText>
                            |
                        <IconText>
                        <span>hello</span>
                            <FastfoodIcon />
                        </IconText>
                            |
                        <IconText>
                        <span>hello</span>
                            <AirplayIcon />
                        </IconText>
                        </RoomFac>
                    </AddressRoom>
                </Wrap1>
                <Wrap2>
                    <span>Deluxe</span>
                    <Fac>
                        <F1>
                        <WifiIcon />
                        <span>Wifi</span>
                        </F1>
                        <F1>
                        <FastfoodIcon />
                        <span>Shower</span>
                        </F1>
                        <F1>
                        <AirplayIcon />
                        <span>Air Condition</span>
                        </F1>
                        
                    </Fac>

                    <Fac>
                        <F1>
                        <WifiIcon />
                        <span>Wifi</span>
                        </F1>
                        <F1>
                        <FastfoodIcon />
                        <span>Shower</span>
                        </F1>
                        <F1>
                        <AirplayIcon />
                        <span>Air Condition</span>
                        </F1>
                        
                    </Fac>
                    
                    <p>
                    <input type="text" placeholder='First Name' />
                    </p>
                    <p>
                    <input type="text" placeholder='Lirst Name' />
                    </p>
                   <p><input type="email" placeholder='Email' /></p>
                    <p>
                    <textarea placeholder='Address' />
                    </p>
                    <p>CheckIn Date:</p>
                    <DatePicker calendarContainer={MyContainer} selected={startDate} onChange={(date) => setStartDate(date)} />
                    <p>CheckOut Date</p>
                    <DatePicker calendarContainer={MyContainer} selected={endtDate} onChange={(date) => setEndtDate(date)} />
                    
                    <p>
                        <button>Book Now</button>
                    </p>
                    
                    
                    
                </Wrap2>
            </Wrapper>
        </Container>
    )
}

export default RoomDetail

const Container = styled.div`
    height: 100vh;
    padding-top: 100px;
`

const Wrapper = styled.div`
    display: flex;
    width: 1200px;
    margin: 0 auto;

    @media(max-width: 768px){
        width: 460px;
        margin-left: 2px;
        display: flex;
        flex-direction: column;
        //overflow-x: scroll;
    }
`

const Wrap1 = styled.div`
    flex: 8;
    //background: red;
    padding: 10px;

    @media(max-width: 768px){
        width: 100%;
    }
`

const Wrap2 = styled.div`
    flex: 4;
    //background: blue;
    display: flex;
    flex-direction: column;
    padding: 10px;

    p{
        //margin-top: 20px;
        color: black;
        input{
            width: 100%;
            height: 40px;
            border: none;
            border-radius: 5px;
            background: #e4eaf5;
            color: black;
        }

        textarea{
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 5px;
            background: #e4eaf5;
            color: black;
        }
        textarea:focus{
            
            border: none;
            
        }

        button{
            width: 100%;
            background: black;
            color: white;
            border: none;
            border-radius: 5px;
            height: 40px;
        }
    }

    @media(max-width: 768px){
        width: 100%;
    }

    span{
        font-size: 30px;
        font-weight: 200;

    }
`

const Fac = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const F1 = styled.div`
    display: flex;
    //justify-content: space-between;
    align-items: center;
    span{
        font-size: 15px;
        padding-left: 10px;
    }
`

const ImageWrap = styled.div`
    border-radius: 10px;
    width: 100%;
    height: 300px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`

const ListImages = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    img{
        border-radius: 10px;
        width: 180px;
        height: 100px;
    }

    @media(max-width: 768px){
        img{
        border-radius: 10px;
        width: 100px;
        height: 80px;
        
    }
    }
`

const AddressRoom = styled.div`
    display: flex;
    justify-content: space-between;
    //background: red;
    

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        
    }
`

const Address = styled.div`
    background: #e4eaf5;
    width: 370px;
    border-radius: 10px;
    color: black;
    h4{
        padding-left: 10px;
        color: grey;
    }
    h3{
        padding-left: 10px;
    }
    @media(max-width: 768px){
        width: 100%;
        
    }
`

const RoomFac = styled.div`
    background: #e4eaf5;
    width: 370px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: space-around;
    
    @media(max-width: 768px){
        width: 100%;
        margin-top: 20px;
        height: 100px;
    }
`

const IconText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        color: black;
        //p//adding: 20px;
    }
`



