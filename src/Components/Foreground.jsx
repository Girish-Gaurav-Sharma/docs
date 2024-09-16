import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
const data = [
    {
        desc: 'This is the content of the card to be displayed inside the card',
        filesize: '.9mb', 
        close: true,
        tag:{
            isOpen: true,
            tagtitle: 'Download Now', 
            tagColor: 'red'
        }

    },
    {
        desc: 'This is the content of the card to be displayed inside the card',
        filesize: '.9mb', 
        close: true,
        tag:{
            isOpen: true,
            tagtitle: 'Download Now', 
            tagColor: 'green'
        }

    },
    {
        desc: 'This is the content of the card to be displayed inside the card',
        filesize: '.9mb', 
        close: true,
        tag:{
            isOpen: true,
            tagtitle: 'Download Now', 
            tagColor: 'zinc'
        }

    },
    {
        desc: 'This is the content of the card to be displayed inside the card',
        filesize: '.9mb', 
        close: true,
        tag:{
            isOpen: true,
            tagtitle: 'Download Now', 
            tagColor: 'blue'
        }

    }
    
]
    return (
    <div ref={ref} className='fixed top-0 left-0 h-full w-full z-[3] flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card key={index} dataForCard={item} refrence={ref} />
        ))}
    </div>
  )
}

export default Foreground