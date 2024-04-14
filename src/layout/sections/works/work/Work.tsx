import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";



type WorkPropsType = {
title: string;
text: string;
src: string;
}



export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
            <Button>VIEW PROJECT</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: ${theme.colors.secondaryBg};
max-width: 540px;
    width: 100%;
    
    ${Link} {
        padding: 10px 0;
        
        &+${Link} {
            margin-left: 20px;
        }
    }
    
`

const Image = styled.img`
height: 260px;
width: 100%;
object-fit: cover;
    
    

`
const ImageWrapper = styled.div`
position: relative;
    
    &:hover{

      
        
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.3);
            backdrop-filter: blur(4px);
        }


        ${Button} {
            opacity: 1;
        }
    }
  
    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        
        &::before {
            width: 100%;
            height: 100%;
        }
        
    }
`

const Title = styled.h3`




`


const Text = styled.p`
margin: 14px 0 10px;
    
`
const Description = styled.div`
padding: 25px 20px;
    
`
