import React, { useState, useEffect } from 'react'
import styles from '@/styles/Searchresults.module.css'

export default function Home() {



  return (
    <div>
         <div className="container">
             <p className={styles.itemimg}>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
             </p>
         </div>

         <div className="container">
             <p className={styles.itemimg}>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
             </p>
         </div>

         <div className="container">
             <p className={styles.itemimg}>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
             </p>
         </div>

         <div className="container">
             <p className={styles.itemimg}>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
               <img src="searchResults/sample.jpeg" width="147" height="155"/>
             </p>
         </div>
        

     </div>
    // <ul className = "bl_flexContainer">
    //   <li className = "el_flexItem"></li>
    //   <li className = "el_flexItem"></li>
    //   <li className = "el_flexItem"></li>
    // </ul>
    
  )
}
