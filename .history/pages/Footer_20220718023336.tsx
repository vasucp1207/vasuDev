import React from 'react'
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import PlayArrow from '@mui/icons-material/PlayArrow';

function Footer() {
    return (
        <div className='h-1/2 flex items-end'>
            <div className='bg-red-200 w-screen flex items-center justify-center h-1/3'>
            <GitHub className='w-10 h-10' onClick={() => window.open('https://github.com/vasucp1207')}></GitHub>
            <Twitter className='w-10 h-10' onClick={() => window.open('https://twitter.com/vasucp1207')}></Twitter>
            <Instagram className='w-10 h-10'></Instagram>
            <PlayArrow className='w-10 h-10'></PlayArrow>
            <LinkedIn className='w-10 h-10'></LinkedIn>
            </div>
        </div>
    )
}

export default Footer