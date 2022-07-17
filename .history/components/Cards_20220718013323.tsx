import React from 'react'

interface Props {
    title: string
    description: string
    image: string
    link: string
}

function Cards({ title, description, image, link }: Props) {
  return (
    <div>
        <div>
            <img src={image} className='w-62 h-52' />
        </div>
        <div>
            <p>{title}</p>
            <p>{}</p>
        </div>
    </div>
  )
}

export default Cards