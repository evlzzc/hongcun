
import React from 'react';
import { Attraction } from '../types';

interface Props {
  attraction: Attraction;
}

const AttractionCard: React.FC<Props> = ({ attraction }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="relative h-48 w-full">
        <img 
          src={attraction.image} 
          alt={attraction.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
          {attraction.time}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">{attraction.name}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {attraction.description}
        </p>
      </div>
    </div>
  );
};

export default AttractionCard;
