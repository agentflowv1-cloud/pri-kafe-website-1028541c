import React from 'react';
import { Promotion } from '../types/Promotion';
import PromotionsList from '../components/PromotionsList';

const promotionsData = [
  { id: 1, name: 'Promotion 1', description: 'Description 1', discount: 10 },
  { id: 2, name: 'Promotion 2', description: 'Description 2', discount: 20 },
];

function Promotions() {
  return (
    <div>
      <h1>Daily Promotions</h1>
      <PromotionsList promotions={promotionsData} />
    </div>
  );
}
export default Promotions;