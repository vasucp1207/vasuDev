import React from 'react'

interface Props {
    title: string
    description: string
    image: string
    link: string
}

function Cards({ title, description, image, link }: Props) {
  return (
    <div className='flex justify-center text-black'>
        <div className='max-w-sm bg-white'>
            <img src={image} className='w-62 h-52' />
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <a href={link} target='_blank'><button>Github</button></a>
            </div>
        </div>
    </div>
  )
}

export default Cards