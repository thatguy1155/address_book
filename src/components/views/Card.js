import React from 'react'
//imports for redux
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { changeSelected, deleteAddress } from '../../actions/addressActions'
import { changeView,setForm } from '../../actions/viewActions'
//imports for material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Card = (props) => {
    const { changeSelected, changeView, setForm, deleteAddress, address, addresses } = props

    //choose the selected address out of the list of addresses
    const displayedAddress = addresses[address]

    //different functions that are triggered whien you press the buttons 
    //forward arrow
    const moveForward = () => {
        changeSelected(address + 1);
    }
    //backward arrow
    const moveBack = () => {
        changeSelected(address - 1);
    }
    //edit logo
    const enableEdit = () => {
        setForm("edit")
        changeView("form")
    }
    //delete logo
    const enableDelete = () => {
        deleteAddress(address)
        changeView("grid")
    }
    //back button
    const backTrack = () => {
        changeView("grid");
    }

    if (!displayedAddress === 0){
        return <h1>No results</h1>
    } else {
        return (
            <React.Fragment>
              <CssBaseline />
              <div style={flex}>
                <div style ={sideDiv}>
                    <IconButton edge="start"  style={displayedAddress.id === 1 ? { visibility: 'hidden' } : { visibility: 'visible' }} color="primary" aria-label="menu" onClick={moveBack}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </div>
                <Container maxWidth="sm">
                    <Typography component="div" style={mainCardDiv} >
                        <Button style={backButton} onClick={backTrack}>back</Button>
                        <div style={soloDisplay}>
                            <Typography variant="h4" style={title}>{displayedAddress.title}</Typography>
                            <Typography variant="h6" style={body}>{displayedAddress.body}</Typography>
                            <div style={bottomButtons}>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={enableEdit}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={enableDelete}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>  
                        </div>   
                    </Typography> 
                </Container>
                <div style ={sideDiv}>
                    <IconButton edge="start"  style={address === addresses.length ? { visibility: 'hidden' } : { visibility: 'visible' }} color="primary" aria-label="menu" onClick={moveForward}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
              </div>
            </React.Fragment>
          );
    }
  
}

//style
const mainCardDiv = {
    paddingBottom:'0px',
    backgroundColor: '#8467bb',
    height: '100vh',
    borderRadius:'20px'
}
const soloDisplay = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    padding:'5ch'
}

const backButton = {
    margin:'0.5ch'
}
const title = {
    fontWeight:'bold',
    marginBottom:'20px'
}

const body = {
    color:'#454442'
}
const flex = {
    display:'flex',
    padding:'5ch'
}
const bottomButtons = {
    display:'flex',
    width:'100%',
    marginTop:'40px',
    justifyContent:'space-between'
}
const sideDiv = {
    margin:'auto',
    display:'flex'
}

//make sure the proper props are being passed through redux
Card.propTypes = {
    changeSelected: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    deleteAddress: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,
    address: PropTypes.number.isRequired,
    addresses: PropTypes.array.isRequired,
}


// //below we connect the values from the state to the component
const mapStateToProps = state => ({
    address: state.address.address,
    addresses: state.address.addresses,

})


export default connect(mapStateToProps, {changeSelected,changeView,setForm,deleteAddress})(Card)
