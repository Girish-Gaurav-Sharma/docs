import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({dataForCard , refrence}) {
  const colorClasses = {
    zinc: 'bg-zinc-600',
    green: 'bg-green-600',
    blue: 'bg-blue-600',
    red: 'bg-red-600'
  };
  const color = colorClasses[dataForCard.tag.tagColor] || 'bg-gray-600';
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.2}} dragElastic={0.2} 
    dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative shrink-0 px-8 py-10 leading-tight w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-3 text-sm font-semibold'>{dataForCard.desc} </p>
        <div className='footer absolute w-full bottom-0 left-0 '>
            <div className='flex items-center justify-between px-8 mb-2'>
                <h5>{dataForCard.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {dataForCard.close ? <IoIosClose />: <LuDownload size='.7em' color='#fff'/>}
                </span>
            </div>
            {
                dataForCard.tag.isOpen &&(
            <div className={`tag w-full py-4 ${color} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{dataForCard.tag.tagtitle}</h3>
            </div>

                )
            }

        </div>    
            
    </motion.div>
  )
}

export default Card