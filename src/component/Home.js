import React, { useEffect } from 'react'
import styled from 'styled-components'
import HotelIcon from '@material-ui/icons/Hotel';
import PoolIcon from '@material-ui/icons/Pool';
import WifiIcon from '@material-ui/icons/Wifi';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AirplayIcon from '@material-ui/icons/Airplay';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { Fade } from "react-awesome-reveal";
import { connect } from 'react-redux';
import { listHotelId } from '../Actions/hotels'
import { Link } from "react-router-dom"


function Home({hotels, listHotelId}) {
   

    
    return (
        <div>
            <Container>
                <Wrapper>
                <Wrap>
                <h1>Enjoy Your Dream Vacation</h1>
                
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                     et dolore magna aliqua. "</p>
                     <TextImg>
                         <MyIcon />
                         <p>Warwick Hotels and Resort</p>
                     </TextImg>
                </Wrap>
                </Wrapper>
                <Fade left>
                <Card1>
                    <LeftContent>
                    <Top>
                        <h2>Facilities</h2>
                        <p>See More</p>
                    </Top>
                    <Bottom>

                        <BContent>
                            <MyPoolIcon>
                            <PoolIcon />
                            </MyPoolIcon>
                            <p style={{ color: "black" }}>Swimming</p>
                            </BContent>

                        <BContent>
                            <MyWifi>
                            <WifiIcon />
                            </MyWifi>                      
                        <p style={{ color: "black" }}>Wifi</p>
                        </BContent>

                        <BContent>
                            <MyAir>
                            <AirplayIcon />
                            </MyAir>
                        <p style={{ color: "black" }}>AC</p>
                        </BContent>

                        <BContent>
                            <MyFood>
                            <FastfoodIcon />
                            </MyFood>
                        <p style={{ color: "black" }}>Dinner</p>
                        </BContent>

                    </Bottom>
                    
                    </LeftContent>
                    
                    <MiddleContent>
                        <h2>Hotels for you</h2>
                        <p>5 Days 6 Nights</p>
                        <PriceIcon>
                            <CheckBoxIcon style={{ color: "blue", paddingLeft: 10, paddingRight: 10 }} />
                            <p>USD $506.00</p>
                        </PriceIcon>
                    </MiddleContent>

                    <RightContent>
                    <RightTop>
                        <h2>Search:</h2>
                        <input />
                    </RightTop>

                    <RightBottom>
                        <img src="/images/resort.jpg" alt="hell" />
                        <img src="/images/resort2.jpg" alt="hell" />
                        <img src="/images/resort.jpg" alt="hell" />
                        <img src="/images/resort3.jpg" alt="hello" />
                        <img src="/images/resort.jpg" alt="hello" />
                    </RightBottom>
                    </RightContent>
                </Card1>
                </Fade>
                <div>
                    <ListHotels>
                        <h1>Enter city of choice</h1>
                        
                            
                                <>
                            <Hotels>
                            {hotels && hotels.hotel_list.map((hot =>{
                            return(
                            <Hotel1 key={hot.pk}><Link to="/hotel-list/" style={{ color: "black" }} onClick = {() => listHotelId(hot.pk)}>
                                <ImgHotel>
                                    <img src={hot.hotel_image} alt="" />
                                    
                                    <BordIcon>
                                    <BorderColorIcon />
                                    </BordIcon>
                                </ImgHotel>
                                <MyIconText>
                                    <Metext>
                                        <h3>State: {hot.addrees.state}</h3>
                                        <h4>City: {hot.addrees.city}</h4>
                                        <p>{hot.hotel_name}</p>
                                    </Metext>
                                    <SecIcon>
                                    <MyIcon />
                                    </SecIcon>
                                </MyIconText>
                                </Link>
                            </Hotel1>
                            )
                        }))
                            }
                        </Hotels>
                        </>
                            

                        <br />
                        <br />
                        
                        
                        <br />
                        <br />
                        <Seccard />
                    </ListHotels>
                    <Resort>
                        <ResortContent>
                            <ResOne>
                                <FirstImg>
                                    <img src="/images/hots.jpg" alt="" />
                                </FirstImg>
                                <SecondImg>
                                    <img src="/images/hots1.jpg" alt="" />
                                </SecondImg>
                                <ThirdImg>
                                    <img src="/images/hots2.jpg" alt="" />
                                </ThirdImg>
                            </ResOne>
                            <ResTwo>
                                <h3>Welcome to Mikky's Reservations and resort</h3>
                                <h1>Relaxing Pleasure</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                     et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                     et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                     et dolore magna aliqua.</p>
                            </ResTwo>
                        </ResortContent>
                    </Resort>

                    <NewLetter>
                        <WrapNew>
                        <h1>Newsletter</h1>
                        <p>Get best update and information about our company and enjoy the best Services we are ready to offer</p>
                        <InputButton>
                        <input type="text" />
                        <button>
                            Send
                        </button>
                        </InputButton>
                        </WrapNew>
                    </NewLetter>
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        hotels: state.hotels
    }
    
  }
  
  const mapDispatchToProps = {
    listHotelId
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)

const Container = styled.div`
    max-height: 100vh;
    position: relative;
    padding-top: 40px;
    margin-top: 50px;
    //background-color: red;
`

const Wrapper = styled.div`
   //background: url('/images/resort.jpg');
    //margin-top: 30px;
    height: 400px;
    border-radius: 10px;
    width: 1400px;
    margin: 0 auto;
    position: relative;
    background-image: linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1));
    padding-top: 40px;
    
    
    &:before{
        
        background-size: cover;
        background-position: top;
        background: url('/images/resort3.jpg');
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
         //background-repeat: no-repeat;
         border-radius: 10px;
        padding-top: 50px;
    }

    @media(max-width: 768px){
        width: 450px;
        border-radius: 10px;
        height: 250px;

        &:before{
        background-position: top;
        background: url('/images/resort2.jpg');
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
    }
}
`

const Wrap = styled.div`
    //background: blue;
    width: 300px;
    margin-left: 50px;
    color: white;
    h1{
        font-size: 40px;
    }

    @media(max-width: 768px){
        h1{
        font-size: 20px;
        
    }
    }
`

const TextImg = styled.div`
    display: flex;
    align-Items: center;
    p{
        margin-left: 10px;
        color: green;
    }
`

const MyIcon = styled(HotelIcon)`
    color: black;
    padding: 7px;
    //background: blue;
    border-radius: 50%;
    border: 1px solid grey;
`

const Card1 = styled.div`
 width: 1250px;
 background: white;
 margin: 0 auto;
 border: 1px black solid;
 border-radius: 7px;
 height: 200px;
 position: absolute;
 top: 390px;
 left: 120px;
 display: flex;
 justify-content: space-between;
 //align-items: center;
 padding-top: 20px;
 padding-left: 20px;
 padding-right: 20px;
 box-shadow: -4px 51px 77px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: -4px 51px 77px 0px rgba(0,0,0,0.75);
-moz-box-shadow: -4px 51px 77px 0px rgba(0,0,0,0.75);
    
 
 @media(max-width: 768px){
    width: 350px;
    position: absolute;
    top: 250px;
    left: 50px;
    height: 500px;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
 }
`

const LeftContent = styled.div`
    //background: red;
    width: 450px;

    @media(max-width: 768px){
        width: 350px;
        
        //background: red;
    }
`

const RightContent = styled(LeftContent)`
    padding-right: 50px;
    padding-left: 50px;

    @media(max-width: 768px){
        padding-right: 10px;
        padding-left: 10px;
        width: 340px;
        
    }

    
`

const Top = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;

    p{
        font-size: 12px;
        color: orange;
    }

    @media(max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    
`

const Bottom = styled.div`
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
`

const BContent = styled.div`
    //display: flex;
    color: black;
`

const MyPoolIcon = styled(PoolIcon)`
    
    
    color: blue;
    padding: 10px;
    border: 1px solid grey;
    margin-bottom: -5px;
    border-radius: 10px;

`

const MyWifi = styled(WifiIcon)`
    color: green;
    padding: 10px;
    border: 1px solid grey;
    margin-bottom: -5px;
    border-radius: 10px;
`

const MyAir = styled(AirplayIcon)`
    color: purple;
    padding: 10px;
    border: 1px solid grey;
    margin-bottom: -5px;
    border-radius: 10px;
    p{
        text-align: center;
        color: black;
    }
`

const MyFood = styled(FastfoodIcon)`
    color: orange;
    padding: 10px;
    border: 1px solid grey;
    margin-bottom: -5px;
    border-radius: 10px;
    p{
        text-align: center;
        color: black;
    }
`

const RightTop = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    
    input{
        height: 30px;
        width: 360px;
        border-radius: 5px;
        margin-left: 10px;
        //outline: 1px;
    }

    h2{
        font-size: 20px;
        font-weight: 100px;
    }
`

const RightBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;

    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`

const MiddleContent = styled.div`
    p{
        color: grey;
    }
`

const PriceIcon = styled.div`
    display: flex;
    align-items: center;
    //padding: 1px;
    border: 1px solid grey;
    border-radius: 5px;

    p{
        color: black;
    }
`

const ListHotels = styled.div`
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    //align-items: center;
    h1{
        text-align: center;
        font-size: 50px;
    }

    @media(max-width: 768px){
        margin-top: 500px;
    }
`

const Hotels = styled.div`
    display: flex;
    justify-content: space-between;
    height: 300px;
    //background: red;
    width: 1100px;
    margin: 0 auto;
    padding-right: 10px;
    padding-left: 10px; 
     
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        //margin-bottom: 200px;
    }
`

const Hotel1 = styled.div`
    background: white;
    //background: white;
    //border: 1px solid grey;
    width: 340px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
-webkit-box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
-moz-box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
@media(max-width: 768px){
    width: 450px;
    margin-bottom: 20px;
    }
`

const ImgHotel = styled.div`
    height: 150px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    //background: url('');
    //background-size: cover;
    //display: flex;
    //padding: 10px;
    //align-items: center;
    padding-top: 10px;
    position: relative;
    align-items: center;
    
    justify-content: space-between;

    h3{
        color: black;
        margin-left: 20px;
        position: absolute;
        bottom: 95px;
        //height: 50px;
        //background: red;
        //width: 50px;
    }

    img{
        height: 100%;
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`

const BordIcon = styled.div`
    margin-right: 20px;
    margin-top: 17px;
    padding: 5px;
    background: rgba(76, 175, 80, 0.3);
    color: white;
    border: 1px solid white;
    border-radius: 50%;
    height: 20px;
    position: absolute;
    bottom: 100px;
    left: 290px;
`

const MyIconText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 40px;
    
`

const Metext = styled.div`
    h3{
        color: red;
    }

    h4{
       
    }

    p{
        color: grey;
    }
   
`

const SecIcon = styled(MyIcon)`
    color: blue;
`

const Seccard = styled.div`
    background-color: #4CAF50;
    opacity: 0.1;
    margin: 0 auto;
    width: 1200px;
    position: absolute;
    bottom: -400px;
    left: 160px;
   height: 200px;
     z-index: -1;
    border-radius: 10px;

    @media(max-width: 768px){
        display: none;
    }
    
`

const Resort = styled.div`
    margin-top: 100px;
    height: 500px;
    

    @media(max-width: 768px){
        margin-top: 700px;
        height: 300px;
    }
`

const ResortContent = styled.div`
    //background: red;
    width: 1200px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;

    @media(max-width: 768px){
        width: 100px;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
`

const ResOne = styled.div`
    //background-color: #ccedf0;
    //opacity: 0.1;
    width: 550px;
    position: relative;
    height: 300px;
    //background-color: #4CAF50;
    //opacity: 0.1;
    border-radius: 10px;
    width: 550px;
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
    padding-left: 20px;
    padding-right: 20px;

    p{
        z-index: 100;
        color: black;
    }

    @media(max-width: 768px){
        padding-left: 20px;
    padding-right: 20px;
    width: 300px;
    }
`

const ResTwo = styled.div`
    //background: red;
    width: 550px;
    padding-top: 50px;
    p{
        text-align: justify;
        text-justify: inter-word;
        color: black;
    }

    h3{
        color: red;
    }
`

const FirstImg = styled.div`

    img{
        width: 150px;
        height: 300px;
        border-radius: 10px;
    }

    @media(max-width: 768px){
        img{
        width: 100px;
        height: 200px;
        border-radius: 10px;
        margin-left: 20px;
    margin-right: 20px;
    }
    }
`

const SecondImg = styled.div`
    img{
        width: 150px;
        height: 300px;
        border-radius: 10px;
        margin-top: -40px;
        box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
-webkit-box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
-moz-box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
    }

    @media(max-width: 768px){
        img{
        width: 100px;
        height: 200px;
        border-radius: 10px;
        margin-left: 20px;
    margin-right: 20px;
    }
    }
    
`

const ThirdImg = styled.div`
    img{
        width: 150px;
        height: 300px;
        border-radius: 10px;
    }

    @media(max-width: 768px){
        img{
        width: 100px;
        height: 200px;
        border-radius: 10px;
        margin-left: 20px;
    margin-right: 20px;
    }
    }
`

const NewLetter = styled.div`
    min-height: 400px;

    @media(max-width: 768px){
        margin-top: 400px;
        width: 100px;
        h1{
            font-size: 20px;
        }
    }
    
`

const WrapNew = styled.div`
    min-height: 150px;
    //background: red;
    width: 800px;
    margin: 0 auto;
    p{
        text-align: center;
        font-size: 20px;
        color: black;
    }
    h1{
        text-align: center;
        font-size: 50px;
    }

    @media(max-width: 768px){
        width: 485px;
        
    }
`

const InputButton = styled.div`
    display: flex;
    justify-content: center;

    input{
        margin-right: 10px;
        height: 40px;
        width: 300px;
        border-radius: 5px;
        border: 1px grey solid;
    }

    button{
        //margin-left: 30px;
        width: 150px;
        background: blue;
        color: white;
        border-radius: 5px;
        box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
-webkit-box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
-moz-box-shadow: 4px 29px 22px -3px rgba(0,0,0,0.41);
border: none;
    }
`