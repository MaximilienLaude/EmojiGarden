import React from 'react';
import Grid from './Grid';

const MultipleGrid = (props) =>{
    return(
        <Grid garden={props.garden} AddEmoji={props.AddEmoji} DeleteEmoji={props.DeleteEmoji}/> 
    )
}

export default MultipleGrid;