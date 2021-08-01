import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(prop) {
    return(
        <div>
            <h2>Number of Cakes {prop.noOfCakes}</h2>
            <button onClick = {prop.buyCake}>Click</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        noOfCakes: state.noOfCakes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCake: () => dispatch(buyCake())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CakeContainer)


