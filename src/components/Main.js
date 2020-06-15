import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchAddresses } from '../actions/addressActions'
import Card from './views/Card'
import Grid from './views/Grid'
import Form from './views/Form'
/**
 *This is the searchbar component.
 * It takes in the props being the kind of search that is selected and the action filterUsers
 */

const Main = (props) => {
    const { fetchAddresses,view } = props


    useEffect(() => {
        fetchAddresses()
        // eslint-disable-next-line
    },[])
 
    

    return (
        <div style={blue}>
            {view === 'grid' && <Grid />}
            {view === 'card' && <Card />}
            {view === 'form' && <Form  />} 
        </div>
    ) 
    
}

// change the background of the searchbar to match the button and the search type


const blue = {
    backgroundColor: '#dfe1df',
    color:'#f8eadd'
 
}

//make sure the proper props are being passed through redux
Main.propTypes = {
   view: PropTypes.string.isRequired,
   fetchAddresses: PropTypes.func.isRequired,
}


//below we connect the values from the state to the component
const mapStateToProps = state => ({
    view: state.view.view,
})

export default connect(mapStateToProps,{fetchAddresses})(Main)

