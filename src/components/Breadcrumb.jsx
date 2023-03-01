import React from 'react';
import {styled,Box,InputBase} from '@mui/material';


const Component = styled(Box)`
    padding:10px 0px;
    background:#888888;
`;

const Breadcrumb = ({setText,setCount}) => {
  return (
    <Component >
        <InputBase placeholder='Search images..'
            onChange={(e)=>setText(e.target.value)}
        />
        <InputBase placeholder='Number of images' type='number'
            onChange={(e)=>setCount(e.target.value)}
        />
    </Component>
  )
}

export default Breadcrumb