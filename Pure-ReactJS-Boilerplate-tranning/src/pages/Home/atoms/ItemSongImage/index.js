import React from "react"
import "./style.scss"

function ItemSongImage (props) {
  return (
    <div className= "ItemSongImage_wrapper">
      <img
        src = {props.image}
        alt = ""
        className = "song_img"
       />
    </div>
  )
}

export default ItemSongImage
