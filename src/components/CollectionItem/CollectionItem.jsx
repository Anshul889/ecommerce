import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = styled.div`
`

const ItemImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 400px;
  }
`

const Footer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 20px;
`

const Name = styled.span``

const Price = styled.span`
justify-self: end;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const CollectionItem = ({id, name, price, imageUrl}) => {
  return (
    <StyledLink to={`/product/${id}`}>
    <Item>
      <ItemImage src={imageUrl}></ItemImage>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </Item>
   </StyledLink>
  )
}

export default CollectionItem
