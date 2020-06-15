import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addAddress,editAddress } from '../../actions/addressActions'
import { changeView } from '../../actions/viewActions'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Form = (props) => {
    const { addresses, address, formType, addAddress, editAddress, changeView } = props

    const selectedAddress = addresses[address]

    const [business, setBusiness] = useState(formType === 'edit' ? selectedAddress.title: '')
    const [location, setLocation] = useState(formType === 'edit' ? selectedAddress.body: '')
    //errors triggered if the submitted fields are empty
    const [businessError, setBusinessError] = useState(false)
    const [locationError, setLocationError] = useState(false)

    
    const onBusinessChange = (e) => {
        setBusiness(e.target.value) 
     }
     const onLocationChange = (e) => {
        setLocation(e.target.value) 
     }

     const onSubmit = (e) => {
         business === "" && setBusinessError(true)
         location === "" && setLocationError(true)
         business !== "" && location !== "" && submissionRouter()
     }

     const submissionRouter = () => {
        formType === "add" ? addAddress({id:addresses.length + 1,title:business,body:location}) : editAddress({id:address,content:{title:business,body:location}})
        changeView("grid")
     }
     
    const backTrack = () => {
        changeView("grid");
    }
    
    
    if (!address === {}){
        return <h1>No results</h1>
    } else {
        return (
            <React.Fragment>
              <CssBaseline />
                <div style={flex}>
                    <Container maxWidth="sm">
                        <Typography component="div" style={mainFormDiv} >
                            <Button style={backButton} onClick={backTrack}>back</Button> 
                            <form action="" style={form}>
                            <Typography variant="h3" >{formType} address</Typography>
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="business"
                                    multiline
                                    onChange={onBusinessChange}
                                    style={textField}
                                    error={businessError}
                                    helperText={businessError ? 'Empty field!' : ''}
                                    rowsMax={4}
                                    value={business}
                                />
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="street address"
                                    multiline
                                    onChange={onLocationChange}
                                    error={locationError}
                                    helperText={locationError ? 'Empty field!' : ''}
                                    style={textField}
                                    rowsMax={4}
                                    value={location}
                                />
                                <Button variant="contained" color="primary" onClick={onSubmit}>
                                    {formType}
                                </Button>
                            </form>  
                            
                        </Typography>
                    </Container>
                </div>
            </React.Fragment>
          );
    }
  
}

const mainFormDiv = {
    paddingBottom:'0px',
    backgroundColor: '#8467bb',
    height: '100vh',
    borderRadius:'20px'
}

const flex = {
    display:'flex',
    padding:'5ch'
}

const form = {
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
const textField = {
    margin:'2ch',
    width:'40ch',
    backgroundColor:'white'
}

//make sure the proper props are being passed through redux
Form.propTypes = {
    //changeSelected: PropTypes.func.isRequired,
    addAddress: PropTypes.func.isRequired,
    editAddress: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    address: PropTypes.number.isRequired,
    formType: PropTypes.string.isRequired,
}


// //below we connect the values from the state to the component
const mapStateToProps = state => ({
    address: state.address.address,
    addresses: state.address.addresses,
    formType: state.view.form
})


export default connect(mapStateToProps, {addAddress,editAddress,changeView})(Form)
