// To display a single image
import React from 'react'
import {Card,styled} from '@mui/material';

const ImageStyle = styled('img')({
    height:300,
    width:"100%",
    objectFit:'cover'
})


const Image = ({image}) => {
  return (
        <Card style={{objectFit:"contain" }}>
            <ImageStyle src={image.largeImageURL} alt={image.tags} />
        </Card>
    )
}

export default Image




