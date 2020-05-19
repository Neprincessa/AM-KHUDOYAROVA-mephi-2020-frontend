import React from 'react';
import Card from './components/Card';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuAppBar from "./components/header";



const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "20px"
    }
});

export default function App() {
    const classes = useStyles();
return (
    <React.Fragment>

      {/*React fragments.*/}
        {/*More React fragments.*/}
      <MenuAppBar/>
    <Grid container spacing={4} className={classes.gridContainer} justify={"center"} style={{marginTop: "100px"}} >
        <Grid item xs={6}>
            <Card />
        </Grid>
        {/*<Grid item xs={12} md={2} xs={2}>*/}
        {/*    <CheckboxListSecondary/>*/}
        {/*</Grid>*/}
    </Grid>


    </React.Fragment>

);
}
