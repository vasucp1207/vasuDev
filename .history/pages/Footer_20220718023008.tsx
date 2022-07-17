import React from 'react'
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import PlayArrow from '@mui/icons-material/PlayArrow';

function Footer() {
    return (
        <div className='h-screen'>
            <div className='bg-'>
            <GitHub className='icon' onClick={() => window.open('https://github.com/vasucp1207')}></GitHub>
            <Twitter className='icon' onClick={() => window.open('https://twitter.com/vasucp1207')}></Twitter>
            <Instagram className='icon'></Instagram>
            <PlayArrow className='icon'></PlayArrow>
            <LinkedIn className='icon'></LinkedIn>
            </div>
        </div>
    )
}

export default Footer