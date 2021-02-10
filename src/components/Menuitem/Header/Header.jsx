import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../../assets/crown.svg'

const Wrapper = styled.div``

const Logoimg = styled.img``

const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  transform: translateY(3px);
`

const Nav = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  display: grid;
  height: 56px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const LeftNav = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    grid-gap: 10px;
  }
`

const RightNav = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: max-content max-content max-content max-content;
  grid-gap: 10px;
  align-content: center;
  font-size: 24px;
  padding-right: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`

const RightNavItem = styled.div``

const BottomNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    height: 56px;
    background-color: white;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`

const BottomNavItem = styled.div`
  display: grid;
`

const BottomImage = styled.img`
  width: 100%;
`
const BottomText = styled.div`
  font-size: 12px;
  text-align: center;
`

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <LeftNav>
          <Link to='/'>
            <Logoimg src={Logo} />
          </Link>
          <Title>Crown Clothing</Title>
        </LeftNav>
        <RightNav>
          <RightNavItem>Shop</RightNavItem>
          <RightNavItem>Contact</RightNavItem>
          <RightNavItem>Sign In</RightNavItem>
          <RightNavItem>Cart</RightNavItem>
        </RightNav>
      </Nav>
      <BottomNav>
        <BottomNavItem>
          <BottomImage />
          <BottomText>Home</BottomText>
        </BottomNavItem>
        <BottomNavItem>
          <BottomImage />
          <BottomText>Shop</BottomText>
        </BottomNavItem>
        <BottomNavItem>
          <BottomImage />
          <BottomText>Contact</BottomText>
        </BottomNavItem>
        <BottomNavItem>
          <BottomImage />
          <BottomText>Cart</BottomText>
        </BottomNavItem>
        <BottomNavItem>
          <BottomImage />
          <BottomText>Login</BottomText>
        </BottomNavItem>
      </BottomNav>
    </Wrapper>
  )
}

export default Header
