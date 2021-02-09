import React from 'react'
import styled from 'styled-components'
import Menuitemc from '../../components/Menuitem/Menuitemc'

const Home = styled.div`
  padding: 20px 80px;
  @media (max-width: 768px) {
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
  }
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
        <Menuitemc imageUrl={'https://source.unsplash.com/600x600/?hat'}/>
        <Menuitemc imageUrl={'https://source.unsplash.com/600x600/?jackets'}/>
        <Menuitemc imageUrl={'https://source.unsplash.com/600x600/?sneakers'}/>
        <Menuitemc imageUrl={'https://source.unsplash.com/600x600/?fashion'}/>
        <Menuitemc imageUrl={'https://source.unsplash.com/600x600/?mens,fashion'}/>
      </Directorymenu >
    </Home>
  )
}

export default Homepage
