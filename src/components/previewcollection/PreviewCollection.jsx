import React from 'react'
import styled from 'styled-components'
import CollectionItem from '../CollectionItem/CollectionItem'

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  max-width: 1080px;
`

const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr
  }
`

const Previewimage = styled.img``

const Name = styled.span``

const PreviewCollection = ({ title, items }) => {
  return (
    <Wrapper>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </Preview>
    </Wrapper>
  )
}

export default PreviewCollection
