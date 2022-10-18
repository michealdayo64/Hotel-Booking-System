import React, { useState } from 'react'
import styled from 'styled-components'

function Dapp ({captureFile, uploadImage, images}) {
        const[inputTitle, setInputTitle] = useState("")
        const[inputDescription, setInputDescription] = useState("")
        return (
            <Container>
                <WrapperHead>
                    <h2>Share Image</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        
                        uploadImage(inputTitle, inputDescription)
                    }}>
                        <input type="file" accept=".jpg, .png, .gif, .jpeg, .bmp" onChange={captureFile}/>
                        <br />
                        <br />
                        <InputText>
                        <input type="text" value={inputTitle} placeholder="Image title" id="imageDescription" onChange={(e) => setInputTitle(e.target.value)} />
                        <br />
                        <br />
                        <textarea type="text" value={inputDescription} placeholder="Image description" id="imageDescription" onChange={(e) => setInputDescription(e.target.value)} />
                        </InputText>
                        <br />
                        
                        <button>Upload</button>
                    </form>
                </WrapperHead>
                <br />
                <br />
                <WrapBody>
                    <WrapAcc>
                    <h3 style={{ textAlign: "center"}}>Cryptocurrency Blog</h3>
                    </WrapAcc>
                    
                    <WrapContent>
                        { images && (
                            <>
                                {images.map((img, i) =>{
                                    return(
                            <Content key={i}>
                            <ImgWrap>
                                <img src={`https://ipfs.infura.io/ipfs/${img.imageHash}`} alt="" />
                            </ImgWrap>
                            <TextWrap>
                                <h3>{img.desc}</h3>
                                <h2>{img.author}</h2>
                            </TextWrap>

                        </Content>

                                    )
                                })}

                            </>
                        )}
                    </WrapContent>
                    
                </WrapBody>
            </Container>
        )
    
}
export default Dapp

const Container = styled.div`
    width: 100%;
    padding: 10px;
    margin-top: 100px;
    
`

const WrapperHead = styled.div`
    margin-top: 300px;
    width: 450px;
    height: 300px;
    margin: auto;
    border: solid 1px grey;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    box-shadow: 5px 11px 22px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 11px 22px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 11px 22px 0px rgba(0,0,0,0.75);
    button{
        width: 300px;
        border-radius: 5px;
        border: solid 2px #0e112e;
        padding: 5px;
        &:hover{
            background-color: #0e112e;
            color: white;
            border: none;
        }
    }

    @media(max-width: 768px){
        width: 400px;
    }
`

const InputText = styled.div`
    input{
        width: 291px;
        border-radius: 5px;
       
    }
`

const WrapBody = styled.div`
    border-radius: 10px;
    width: 1000px;
    //height: 400px;
    margin: auto;
    //margin-top: 200px;
    border: solid 1px grey;

    @media(max-width: 768px){
        width: 450px;
    }
    
`

const WrapAcc = styled.div`
    background-color: #0e112e;
    width: 1003px;
    height: 50px;
    color: white;
    margin-top: -19px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-left: -1px;

    @media(max-width: 768px){
        width: 452px;
    }

    h3{
        padding-top: 10px;
        
    }
`

const WrapContent = styled.div`
    padding: 20px;
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    
`

const Content = styled.div`
    background-color: #0e112e;
    border-radius: 5px;
    color: white;
    display: flex;
    margin-bottom: 10px;
    
`

const ImgWrap = styled.div`
    background: red;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 200px;
    height: 200px;

    @media(max-width: 768px){
        width: 700px;
    }

    img{
        height: 100%;
        width: 100%;
    }
`

const TextWrap = styled.div`
    padding-left: 10px;
`