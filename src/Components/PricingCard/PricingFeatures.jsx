import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({features}) => {
  return (
    <p className='flex mt-4'> <CircleCheckBig className='mr-2'/>{features}</p>
  );
};

export default PricingFeatures;