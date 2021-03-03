import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/crown.svg'
import Home from '../../assets/home.svg'
import Cart from '../../assets/shopping-cart.svg'
import User from '../../assets/user-circle.svg'
import Heart from '../../assets/heart.svg'

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
  grid-gap: 15px;
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
  height: 100%;
`

const BottomImage = styled.img`
  width: 22px;
  justify-self: center;
  padding-top: 8px;
`
const BottomText = styled.div`
  font-size: 12px;
  text-align: center;
`

const activeClassName = 'nav-item-active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: black;
  &.${activeClassName} {
      font-weight: bold;
    }
  @media (max-width: 768px) {
    opacity: 0.7;
    &.${activeClassName} {
      opacity: 1;
    }
  }
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
          <StyledLink exact to='/shop'>
            <RightNavItem>Shop</RightNavItem>
          </StyledLink>
          <StyledLink exact to='/contact'>
            <RightNavItem>Contact</RightNavItem>
          </StyledLink>
          <StyledLink exact to='/signin'>
            <RightNavItem>Sign In</RightNavItem>
          </StyledLink>
          <StyledLink exact to='/cart'>
            <RightNavItem>Cart</RightNavItem>
          </StyledLink>
        </RightNav>
      </Nav>
      <BottomNav>
        <StyledLink exact to='/'>
          <BottomNavItem>
            <BottomImage src={Home} />
            <BottomText>Home</BottomText>
          </BottomNavItem>
        </StyledLink>
        <StyledLink exact to='/shop'>
          <BottomNavItem>
            <BottomImage src={Home} />
            <BottomText>Shop</BottomText>
          </BottomNavItem>
        </StyledLink>
        <StyledLink exact to='/wishlist'>
          <BottomNavItem>
            <BottomImage src={Heart} />
            <BottomText>Wishlist</BottomText>
          </BottomNavItem>
        </StyledLink>
        <StyledLink exact to='/cart'>
          <BottomNavItem>
            <BottomImage src={Cart} />
            <BottomText>Cart</BottomText>
          </BottomNavItem>
        </StyledLink>
        <StyledLink exact to='/signin'>
          <BottomNavItem>
            <BottomImage src={User} />
            <BottomText>Login</BottomText>
          </BottomNavItem>
        </StyledLink>
      </BottomNav>
    </Wrapper>
  )
}

export default Header
