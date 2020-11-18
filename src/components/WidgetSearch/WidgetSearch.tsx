import React, {useContext, useEffect, useState} from 'react';
import classes from './WidgetSearch.module.css'
import MainPageContext from "../../pages/MainPage/MainPageContext";

export default () => {

 const searchContext = useContext(MainPageContext);
 const currentShops = searchContext?.currentShops;

 const [filteredShops, setFilteredShops] = useState(['']);
 const [selectedShop, setSelectedShop] = useState('');

 const handleSelectShop = (e: any) => {
   setSelectedShop(e.target.value);
   if (e.target.value) {
     const newShopList = currentShops?.filter((item: string) => item.toLowerCase().includes(e.target.value.toLowerCase()))
     setFilteredShops(newShopList);
   } else {
     setFilteredShops([])
   }
 }

 return (
   <div className={classes.WidgetSearch}>
     <h2 className={classes.title}>Найди нас в своем городе</h2>
     <div className={classes.search_container}>
       <label htmlFor="search" className={classes.search_icon}></label>
       <input id={'search'}
              type="text"
              className={classes.input}
              value={selectedShop}
              onChange={(e) => {
                handleSelectShop(e)
              }}
       />
     </div>
     <ul className={classes.list}>
       { filteredShops[0] && filteredShops?.map((item, index) =>
         <li key={index}
             className={classes.item}
         >
           {item}
         </li>
       )}
     </ul>
   </div>
  )
}