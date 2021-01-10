import axios from 'axios';
import React, { useState } from 'react'
import ImageList from './components/ImageList';
import Search from './components/Search'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
   container: {
      width: 800,
      margin: "0 auto",
   }
})

const App = () => {
   const classes = useStyles();
   const [images, setImages] = useState([]);
   const apiKey = process.env.REACT_APP_PIXABY_APIKEY;

   const TextHandle = async (e) => {
      try {
         const params = {
            key: apiKey,
            q: e,
         };
         const res = await axios.get("https://pixabay.com/api/", { params });
         if (res.status !== 200) {
            throw new Error("通信に失敗しました。")
         }
         if (res.data.total === 0) {
            throw new Error("検索ありません。");
         }
         setImages(res.data.hits);
      } catch (e) {
         alert(e);
      }
   };

   return (
      <div className={classes.container} style={{ marginTop: 20 }}>
         <div>
            <Search TextHandle={TextHandle} />
            {
               images.length > 0 ? (
                  <ImageList images={images} />
               ) : (
                     <h2>Nothing images</h2>
                  )
            }

         </div>
      </div>
   );
}

export default App;