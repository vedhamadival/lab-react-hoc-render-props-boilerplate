import React, { useState } from 'react'

const HOC = (OriginalComponent) => {

    const newComponent = ()=>{

    const [likeImageCounter, setLikeImageCounter] = useState(0)
    const handleLikeImageCount = ()=>{
    setLikeImageCounter(likeImageCounter+1);
  }

  return (
    <div>
      <OriginalComponent likeImageCounter=  {likeImageCounter} handleLikeImageCount= {handleLikeImageCount}/>
    </div>
  )

}
return newComponent

}
export default HOC
