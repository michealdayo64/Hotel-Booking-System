import React from 'react'
import styled from 'styled-components'
import HotelIcon from '@material-ui/icons/Hotel';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { connect } from 'react-redux';
import { listHotelId } from '../Actions/hotels'
import { Link } from "react-router-dom"


function ListHotel({hotels, listHotelId}) {
    return (
        <Container>
            <Wrapper>
                <Wrap1>
                    <h1 onClick={() => listHotelId()}>List of hotel</h1>
                    {hotels && hotels.hotel_list.map((cat) =>{
                        return(
                            <div key = {cat.pk} onClick={() => listHotelId(cat.pk)}>
                                <h3>{cat.hotel_name}</h3>
                            </div>
                        )
                    })

                    }
                        
                        
                </Wrap1>
                <Wrap2>
                <ListHotels>
                        <h1>Room Categories</h1>
                        <Hotels>
                            <Hotel1>
                                <ImgHotel>
                                    <h3>LONDON</h3>
                                    <BordIcon>
                                    <BorderColorIcon />
                                    </BordIcon>
                                </ImgHotel>
                                <MyIconText>
                                    <Metext>
                                        <h3>$600.00</h3>
                                        <h4>Room ID: 954478</h4>
                                        <p>Presidential Lodge</p>
                                    </Metext>
                                    <SecIcon>
                                    <MyIcon />
                                    </SecIcon>
                                </MyIconText>
                            </Hotel1>

                            <Hotel1>
                                <ImgHotel>
                                    <h3>LONDON</h3>
                                    <BordIcon>
                                    <BorderColorIcon />
                                    </BordIcon>
                                </ImgHotel>
                                <MyIconText>
                                    <Metext>
                                        <h3>$600.00</h3>
                                        <h4>Room ID: 954478</h4>
                                        <p>First Class</p>
                                    </Metext>
                                    <SecIcon>
                                    <MyIcon />
                                    </SecIcon>
                                </MyIconText>
                            </Hotel1>

                            <Hotel1>
                                <ImgHotel>
                                    <h3>LONDON</h3>
                                    <BordIcon>
                                    <BorderColorIcon />
                                    </BordIcon>
                                </ImgHotel>
                                <MyIconText>
                                    <Metext>
                                        <h3>$600.00</h3>
                                        <h4>Room ID: 954478</h4>
                                        <p>Business Class</p>
                                    </Metext>
                                    <SecIcon>
                                    <MyIcon />
                                    </SecIcon>
                                </MyIconText>
                            </Hotel1>

                        </Hotels>
                        <br />
                        <br />

                        <Hotels>
                            <Hotel1>
                                <ImgHotel>
                                    <h3>LONDON</h3>
                                    <BordIcon>
                                    <BorderColorIcon />
                                    </BordIcon>
                                </ImgHotel>
                                <MyIconText>
                                    <Metext>
                                        <h3>$600.00</h3>
                                        <h4>Room ID: 954478</h4>
                                        <p>Presidential Lodge</p>
                                    </Metext>
                                    <SecIcon>
                                    <MyIcon />
                                    </SecIcon>
                                </MyIconText>
                            </Hotel1>

                            <Hotel1>
                                <ImgHotel>
                                    <h3>LONDON</h3>
                                    <BordIcon>
                                    <BorderColorIcon />
                                    </BordIcon>
                                </ImgHotel>
                                <MyIconText>
                                    <Metext>
                                        <h3>$600.00</h3>
                                        <h4>Room ID: 954478</h4>
                                        <p>First Class</p>
                                    </Metext>
                                    <SecIcon>
                                    <MyIcon />
                                    </SecIcon>
                                </MyIconText>
                            </Hotel1>

                            <Hotel1>
                                <ImgHotel>
                                    <h3>LONDON</h3>
                                    <BordIcon>
                                    <BorderColorIcon />
                                    </BordIcon>
                                </ImgHotel>
                                <MyIconText>
                                    <Metext>
                                        <h3>$600.00</h3>
                                        <h4>Room ID: 954478</h4>
                                        <p>Business Class</p>
                                    </Metext>
                                    <SecIcon>
                                    <MyIcon />
                                    </SecIcon>
                                </MyIconText>
                            </Hotel1>

                        </Hotels>
                        <br />
                        <br />
                        
                    </ListHotels>
                </Wrap2>
            </Wrapper>
        </Container>
    )
}

const mapStateToProps = state => {
    console.log(state.hotels)
    return{
        hotels: state.hotels
    }
    
  }

  const mapDispatchToProps = {
    listHotelId
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListHotel)

const Container = styled.div`
    width: 100%;
    max-height: 100vh;
    margin-top: 100px;
`

const Wrapper = styled.div`
    display: flex;
    padding: 20px;

    @media(max-width: 768px){
        padding: 0px;
    }
`

const Wrap1 = styled.div`
    flex: 3;
    //background: blue;
    
    h1{
        background: red;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        h1{
            font-size: 25px;
        }
    }

    div{
        h3{
            &:hover{
            background: #adc7f7;
            padding: 3px;
            border-radius: 5px;
            cursor: pointer;
        }
        }
        
    }

    
`

const Wrap2 = styled.div`
    flex: 9;
    //background: red;

    
`

const ListHotels = styled.div`
    //margin-top: 250px;
    display: flex;
    flex-direction: column;
    //align-items: center;
    h1{
        text-align: center;
        font-size: 30px;
    }

    @media(max-width: 768px){
        //margin-top: 500px;
        h1{
        text-align: left;
        font-size: 30px;
    }
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
        //width: 1100px;
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
    width: 350px;
    margin-bottom: 20px;
    }
`

const ImgHotel = styled.div`
    height: 150px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: url('/images/resort3.jpg');
    background-size: cover;
    display: flex;
    //padding: 10px;
    //align-items: center;
    padding-top: 10px;
    
    justify-content: space-between;

    h2{
        color: white;
        margin-left: 20px;
        //height: 50px;
        //background: red;
        //width: 50px;
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
`

const MyIcon = styled(HotelIcon)`
    color: black;
    padding: 7px;
    //background: blue;
    border-radius: 50%;
    border: 1px solid grey;
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



