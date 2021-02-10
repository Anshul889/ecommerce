import React from 'react'
import styled from 'styled-components'
import Menuitemc from '../../components/Menuitem/Menuitemc'

const Home = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 20px auto;
`

const Directorymenu = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Homepage = () => {
  return (
    <Home>
      <Directorymenu>
        <Menuitemc imageUrl={'https://source.unsplash.com/400x400/?hat'} />
        <Menuitemc imageUrl={'https://source.unsplash.com/400x400/?jackets'} />
        <Menuitemc imageUrl={'https://source.unsplash.com/400x400/?sneakers'} />
        <Menuitemc
          imageUrl={'https://source.unsplash.com/600x600/?woman,fashion'}
        />
        <Menuitemc
          imageUrl={'https://source.unsplash.com/600x600/?man,fashion'}
        />
      </Directorymenu>
    </Home>
  )
}

export default Homepage
