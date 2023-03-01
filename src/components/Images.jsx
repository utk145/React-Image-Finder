import React from 'react'
import {Grid} from '@mui/material'
import Image from './Image';

const Images = ({data}) => {
  return (
    <Grid container spacing={1.2}>
        {
            data.map(image=>(
                <Grid item xs={4}>
                    <Image image={image}/>
                </Grid>
            ))
        }
    </Grid>
  )
}

export default Images