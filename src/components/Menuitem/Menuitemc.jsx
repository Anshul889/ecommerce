import React from 'react'
import styled from 'styled-components'

const Menuitem = styled.div`
  min-width: 30%;
  height: 240px;
  display: grid;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  grid-column: span 2;
  overflow: hidden;
  &:nth-child(4) {
    grid-column: span 3;
  }
  &:nth-child(5) {
    grid-column: span 3;
  }
  @media (max-width: 768px) {
    &:nth-child(4) {
      grid-column: span 2;
    }
    &:nth-child(5) {
      grid-column: span 2;
    }
  }
`

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: grid;
  place-items: center;
  border: 1px solid black;
  grid-template-columns: 1fr;
  grid-row-start: 1;
  grid-column-start: 1;
  width: 30%;
  margin:0 auto;
  z-index: 100;
  background-color: white;
  opacity: 0.7;
`
const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: black;
`

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: black;
`

const Categoryimage = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  grid-row-start: 1;
  grid-column-start: 1;
  transition: transform .5s;
  &:hover{
    transform: scale(1.25) 
  }
`

const Menuitemc = ({ title, id, imageUrl }) => {
  return (
    <Menuitem>
      <Categoryimage src={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>Shop Now</Subtitle>
      </Content>
    </Menuitem>
  )
}

export default Menuitemc
