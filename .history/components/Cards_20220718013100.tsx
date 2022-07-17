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
            <img src={image'} />
        </div>
    </div>
  )
}

export default Cards