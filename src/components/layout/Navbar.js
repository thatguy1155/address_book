import React from 'react';
//material imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ViewModuleIcon from '@material-ui/icons/ViewModule';


import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
//redux imports
import { changeSelected } from '../../actions/addressActions'
import { changeView,setForm } from '../../actions/viewActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

//meterial ui styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



const ButtonAppBar = (props) => {
    const { changeSelected,changeView,setForm } = props
const classes = useStyles();


const selectGrid = e => {
    changeView('grid')
}

const selectCard = e => {
    changeView('card')
    changeSelected(1)
}
const selectAdd= e => {
    setForm("add")
    changeView('form')
}



  return (
    <div className={classes.root}>
      <AppBar style={bgColor} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ADDRESS FINDER
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={selectGrid}>
            <ViewModuleIcon />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={selectCard}>
            <ViewCarouselIcon />
          </IconButton>
          <IconButton edge="start" className={classes.BorderAllIcon} color="inherit" aria-label="menu" onClick={selectAdd}>
            <AddBoxIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const bgColor = {
    // color:'#454442',
    backgroundColor:'#76c69f'
}

//make sure the proper props are being passed through redux
ButtonAppBar.propTypes = {
    changeView: PropTypes.func.isRequired,
    changeSelected: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,

 }
 
 
 //below we connect the values from the state to the component

 
 export default connect(null,{changeView,changeSelected,setForm})(ButtonAppBar)
 