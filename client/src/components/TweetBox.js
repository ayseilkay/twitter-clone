import React,{useState} from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/icon'
import db from '../firebase';
import firebase from 'firebase/compat/app';
function TweetBox() {
    const [content,setContent]=useState('');

    const sendTweet = ()=>{
        if(content !== ''){
            db.collection('feed').add({
                displayName:"Ayse İlkay",
                username:"@aayseilkay",
                content,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                image:"https://media.giphy.com/media/2aw9gwZlltbdX92b4w/giphy.gif",
                avatar:"https://pbs.twimg.com/profile_images/1042827812741308417/1Zh9d8Uc_400x400.jpg"
            })
            setContent("")//text areanın icini bosalttık.
        }
    }

  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
            <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent' placeholder="What's happening?"
            onChange={(e)=> setContent(e.target.value)}
            value={content}
            />  
            <div className='flex items-center justify-between' >
                    <div className='flex -ml-3'>
                        <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'><ImageIcon className=" text-primary-base"/></div>
                        <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'><GIFIcon/></div>
                        <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'><PollIcon/></div>
                        <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'><EmojiIcon/></div>
                        <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest'><ScheduleIcon/></div>
                    </div>
                    <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium'
                    onClick={()=>sendTweet()}
                    >Tweet</button>
                </div>
    </div>
  )
}

export default TweetBox