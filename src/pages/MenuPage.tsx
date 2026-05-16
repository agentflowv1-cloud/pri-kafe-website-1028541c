import React from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import menuItems from '../data/menuItems';

const MenuPage = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;