import React from 'react';
import styled from "styled-components";



type WorkPropsType = {
title: string;
text: string;
src: string;
}



export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: #ffe869;
max-width: 540px;
    width: 100%;
`

const Image = styled.img`
height: 260px;
width: 100%;
object-fit: cover;

`

const Title = styled.h3`




`

const Link = styled.a`



`

const Text = styled.p`



`

