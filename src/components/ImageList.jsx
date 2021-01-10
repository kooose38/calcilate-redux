import React, { Component } from 'react'
import Masonry from "react-masonry-component";
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
   images: {
      width: "25%",
      padding: "5 0 5 0",
   },
   image: {
      width: "100%",
   }
})

const ImageList = ({ images }) => {
   const classes = useStyles()
   return (
      <Masonry
         className="image-list"
      >
         {images.map(image => (
            <a style={{ display: "flex" }} key={image.id} href={image.pageURL} target="_blank" rel="noope moreferrer" className={classes.images}>
               <img src={image.webformatURL} alt={image.tags} className={classes.image} />
            </a>
         ))}
      </Masonry>
   );
}

export default ImageList;