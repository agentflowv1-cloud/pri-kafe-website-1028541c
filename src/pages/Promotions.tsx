import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Promotion } from '../types/Promotion';
import PromotionsList from '../components/PromotionsList';
function Promotions() {
  const { data, error, isLoading } = useQuery('promotions', async () => {
    const response = await axios.get('https://example.com/promotions');
    return response.data;
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Daily Promotions</h1>
      <PromotionsList promotions={data} />
    </div>
  );
}
export default Promotions;