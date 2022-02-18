import React from 'react'
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from '../icons/icon'

function FeedItemCard({avatar,content,displayName,username,timestamp,image}) {
  return (
    <article className='flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer '>
        <img  src={avatar} alt='profile' className='w-11 h-11 rounded-full'/>
        <div className='flex-1'>
            <div className='flex items-center text-sm'>
                <h4 className='font-bold '>{displayName}</h4>
                <span className='text-gray-dark ml-2'>{username}</span>
                <div className='mx-2 bg-gray-dark h-1 w-1 rounded-full'/>
                <span className='text-gray-dark '>{timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
            </div>
            <p className='mt-2 text-gray-900 text-sm'>{content}</p>
            {image && (
                <img src={image} className='my-2 rounded-xl max-h-96'/>
            )}
            <ul className='-m-l mt-3 flex justify-between max-w-md'>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group '>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'><ReplyIcon className="group-hover:text-primary-base"/></div>
                    <span className='group-hover:text-primary-base'>7</span>
                </li>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group '>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200'><ReTweetIcon className="group-hover:text-primary-base"/></div>
                    <span className='group-hover:text-green-400'>7</span>
                </li>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group '>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-200'><LikeIcon className="group-hover:text-primary-base"/></div>
                    <span className='group-hover:text-red-400'>7</span>
                </li>
                <li className='flex items-center space-x-3 text-gray-dark text-sm group '>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-orange-200'><ShareIcon className="group-hover:text-primary-base"/></div>
                    <span className='group-hover:text-orange-400'>7</span>
                </li>
               
            </ul>
        </div>
       
    </article>
  )
}

export default FeedItemCard