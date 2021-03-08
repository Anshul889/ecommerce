import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchHats } from '../../redux/products/hats.action'
import CollectionItem from '../CollectionItem/CollectionItem'

const mapStateToProps = (state) => ({
  hats: state.hats,
})

const actions = {
  fetchHats,
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

class Hats extends Component {
  componentDidMount() {
    if (this.props.hats.length === 0) {
      this.props.fetchHats()
    }
  }

  render() {
    const { hats } = this.props
    return (
      <div>
        <Title>HATS</Title>
        <Preview>
          {hats?.map(({ id, ...otherCollectionProps }) => (
            <CollectionItem key={id} id={id} {...otherCollectionProps} />
          ))}
        </Preview>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Hats)
