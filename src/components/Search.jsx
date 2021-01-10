import React, { useState, useCallback } from 'react'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
   form: {
      display: "block",
      marginBottom: 10,
   },
   field: {
      width: "100%"
   }
})

const Search = ({ TextHandle }) => {
   const classes = useStyles();
   const [key, setKey] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      TextHandle(key);
   }
   const addChange = useCallback((e) => {
      setKey(e.target.value);
   }, [setKey]);
   return (
      <div className={classes.form}>
         <form className="ui form" onSubmit={(e) => handleSubmit(e)} >
            <div>
               <label name="search">Image serach
               <input name="search" className={classes.field} type="text" name="search" placeholder="" onChange={addChange} />
               </label>
            </div>
         </form>

      </div>
   );
}

export default Search;