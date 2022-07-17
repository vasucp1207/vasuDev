import React from 'react'

interface Props {
    title: string
    description: string
    image: string
    link: string
}

function Cards({ title, description, image, link }: Props) {
    return (
        <div className="flex-1 rounded-lg shadow-lg bg-white max-w-sm hover:sha">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {description}
                </p>
                <a href={link} target='_blank'><button type="button" className=" inline-block px-6 py-2.5 bg-fuchsia-500 text-white font-medium text-xs
                 leading-tight uppercase rounded shadow-md hover:bg-fuchsia-700
                  hover:shadow-lg focus:bg-fuchsia-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800
                   active:shadow-lg transition duration-150 ease-in-out">Github</button></a>
            </div>
        </div>
    )
}

export default Cards