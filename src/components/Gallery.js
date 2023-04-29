// Gallery.js
import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import Read from "../helper"

const Gallery = (props) => {
    const data = props.data.result.Read()

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}


export default Gallery;
