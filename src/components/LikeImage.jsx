import React, { useState } from 'react'
import HOC from './HOC'

function LikeImage(props) {
  const {likeImageCounter , handleLikeImageCount} = props 

  // const [likeImageCounter, setLikeImageCounter] = useState(0);

  // const handleLikeImageCount = ()=>{
  //   setLikeImageCounter(likeImageCounter+1);
  // }

  return (
    <div>
      <button onClick={handleLikeImageCount}>Like Image {likeImageCounter}</button>
    </div>
  )
}

export default HOC(LikeImage)
