import React from 'react'
import FeedItemCard from './FeedItemCard'

function FeedList({tweets}) {
  return (
    <div>
        {
            tweets.map((tweet,index)=>(
                <FeedItemCard {...tweet} key={index}/>
            ))
        }
    </div>
  )
}

export default FeedList