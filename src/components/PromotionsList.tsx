import React from 'react';
import { Promotion } from '../types/Promotion';
interface Props {
  promotions: Promotion[];
}
function PromotionsList({ promotions }: Props) {
  return (
    <ul>
      {promotions.map((promotion) => (
        <li key={promotion.id}>
          <h2>{promotion.name}</h2>
          <p>{promotion.description}</p>
          <p>Discount: {promotion.discount}%</p>
        </li>
      ))}
    </ul>
  );
}
export default PromotionsList;