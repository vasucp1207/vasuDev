import React from 'react'
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import PlayArrow from '@mui/icons-material/PlayArrow';

function Footer() {
    return (
        <div className='h-96 flex items-end relative'>
            <div className='bg-lightB w-screen flex items-center justify-center gap-10 h-1/3'>
                <GitHub className='z-10 cursor-pointer hover:-translate-y-5 hover:text-fuchsia-500 transition-all duration-500 w-10 h-10' onClick={() => window.open('https://github.com/vasucp1207')}></GitHub>
                <Twitter className='z-10 cursor-pointer hover:-translate-y-5 hover:text-fuchsia-500 transition-all duration-500 w-10 h-10' onClick={() => window.open('https://twitter.com/vasucp1207')}></Twitter>
                <Instagram className='z-10 cursor-pointer hover:-translate-y-5 hover:text-fuchsia-500 transition-all duration-500 w-10 h-10'></Instagram>
                <PlayArrow className='z-10 cursor-pointer hover:-translate-y-5 hover:text-fuchsia-500 transition-all duration-500 w-10 h-10'></PlayArrow>
                <LinkedIn className='z-10 cursor-pointer hover:-translate-y-5 hover:text-fuchsia-500 transition-all duration-500 w-10 h-10'></LinkedIn>
            </div>
            <img src='SpaceShip.png' className='z-0 absolute right-0 bottom-0 h-72 w-72' />
        </div>
    )
}

export default Footer