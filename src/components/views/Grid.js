import React from 'react'
import PropTypes from 'prop-types';
//material imports
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
//redux imports
import { connect } from 'react-redux'
import { changeSelected,deleteAddress } from '../../actions/addressActions'
import { changeView,setForm } from '../../actions/viewActions'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '100ch',
      margin:'auto',
      cursor:'pointer',
      backgroundColor: '#8467bb',
      borderRadius:'5px'
    },
    inline: {
      display: 'inline',
    },
  }));

const column = {
    display:'flex',
    flexDirection:'column'
}


const CenteredGrid = (props) => {

    //props brought in from redux
    const { changeView,changeSelected,addresses,setForm,deleteAddress } = props
    console.log(addresses)

    const enableEdit = () => {
        setForm("edit")
        changeView("form")
    }
    const enableDelete = (address) => {
        deleteAddress(address - 1)
    }

    const setCard = (id) => {
        changeView("card")
        changeSelected(id - 1)
    }
    //materialui
  const classes = useStyles();
  return (
    <div style={flex}>
        <List className={classes.root}>
            {addresses.map(address => (
                <div className="rulesWrapper" key={address.id} >
                    <ListItem alignItems="flex-start">
                    <ListItemText
                    style={listItemPadding}
                    onClick={() => setCard(address.id)}
                    primary={address.title}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="inherit"
                        >
                        </Typography>
                        {address.body}
                        </React.Fragment>
                    }
                    />
                    <div style={column}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={enableEdit}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="start" color="inherit" id={address.id} aria-label="menu" onClick={() => enableDelete(address.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </ListItem>
                <Divider component="li" />
            </div>
            ))}
        
        </List>
    </div>
    
  );
}

const flex = {
    display:'flex',
    padding:'3ch'
}

const listItemPadding = {
    padding:'1ch'
}


//make sure the proper props are being passed through redux
CenteredGrid.propTypes = {
    changeSelected: PropTypes.func.isRequired,
    deleteAddress: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired
    //addresses: PropTypes.array.isRequired,
}


//below we connect the values from the state to the component
const mapStateToProps = state => ({
    addresses: state.address.addresses,
})

export default connect(mapStateToProps, {changeSelected,changeView,deleteAddress,setForm})(CenteredGrid)
