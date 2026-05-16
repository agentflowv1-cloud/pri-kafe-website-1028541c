import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-4">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-4">{item.name}</h2>
      <p className="text-gray-600">{item.description}</p>
      <p className="text-lg font-bold mt-4">${item.price}</p>
      <Link to={`/menu/${item.id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">Order Now</Link>
    </div>
  );
};

export default MenuCard;