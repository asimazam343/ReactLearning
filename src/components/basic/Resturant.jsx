import React,{ useState } from 'react';
import Menu from './menuApi.jsx';
import "./style.css";
import MenuCard from './MenuCard.jsx';


const Resturant = () => {
    const [menuData,] = useState(Menu);

  return (
    <>
      <MenuCard menuData={menuData}/>
    </>
  );
}

export default Resturant;