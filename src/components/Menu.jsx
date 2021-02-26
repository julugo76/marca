import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       position:'static'
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
        
    },
    title: {
        flexGrow: 1,
    },
    imgmarca: {
        //paddingLeft: 137,
        width: 120,
        height: 80,
        
    },
    bar: {
       // background: 'black',
        height: 300,
        
    },
    menuicon: {

    },
    toolbarButtons: {
        marginLeft: 'auto',
        marginRight: 137
    }

}));


export default function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar} >
                <Toolbar >
                    <img src="../static/img/Logo.svg" className={classes.imgmarca} alt="" />
                    <div className={classes.toolbarButtons}>
                        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
                    </div>
                    <MenuIcon />

                </Toolbar>
            </AppBar>
        </div>
    );
}