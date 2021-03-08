import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchSneakers } from '../../redux/products/sneakers.action'
import CollectionItem from '../CollectionItem/CollectionItem'

const mapStateToProps = (state) => ({
  sneakers: state.sneakers,
})

const actions = {
  fetchSneakers,
}

const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h1``

class Sneakers extends Component {
  componentDidMount() {
    if (this.props.sneakers.length === 0) {
      this.props.fetchSneakers()
    }
  }

  render() {
    const { sneakers } = this.props
    return (
      <div>
        <Title>Sneakers</Title>
        <Preview>
          {sneakers?.map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} id={id} {...otherCollectionProps} />
          ))}
        </Preview>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Sneakers)
