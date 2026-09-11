import React from 'react';
import { Leaf, Flame, ShieldCheck, Nut, Milk, Check } from 'lucide-react';
import { DietaryTag } from '../types';

interface DietaryBadgeProps {
  tag: DietaryTag;
  size?: 'sm' | 'md';
}

export const DietaryBadge: React.FC<DietaryBadgeProps> = ({ tag, size = 'sm' }) => {
  const isSm = size === 'sm';

  switch (tag.type) {
    case 'eggless':
      return (
        <span 
          className={`inline-flex items-center gap-1 font-semibold rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs ${
            isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
          }`}
          title="100% Eggless / Vegetarian preparation"
        >
          <Leaf className={isSm ? "w-3 h-3 text-emerald-600" : "w-3.5 h-3.5 text-emerald-600"} />
          <span>{tag.label}</span>
        </span>
      );

    case 'contains-nuts':
      return (
        <span 
          className={`inline-flex items-center gap-1 font-semibold rounded-md bg-amber-50 text-amber-900 border border-amber-300 shadow-2xs ${
            isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
          }`}
          title="Contains nuts / roasted dry fruits"
        >
          <Nut className={isSm ? "w-3 h-3 text-amber-700" : "w-3.5 h-3.5 text-amber-700"} />
          <span>{tag.label}</span>
        </span>
      );

    case 'nut-free':
      return (
        <span 
          className={`inline-flex items-center gap-1 font-medium rounded-md bg-stone-50 text-stone-700 border border-stone-200 shadow-2xs ${
            isSm ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-0.5 text-xs'
          }`}
          title="Prepared without tree nuts"
        >
          <Check className={isSm ? "w-2.5 h-2.5 text-stone-500" : "w-3 h-3 text-stone-500"} />
          <span>{tag.label}</span>
        </span>
      );

    case 'spicy':
      return (
        <span 
          className={`inline-flex items-center gap-1 font-semibold rounded-md bg-rose-50 text-rose-800 border border-rose-200 shadow-2xs ${
            isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
          }`}
          title="Spiced savory treat"
        >
          <Flame className={isSm ? "w-3 h-3 text-rose-600" : "w-3.5 h-3.5 text-rose-600"} />
          <span>{tag.label}</span>
        </span>
      );

    case 'dairy':
      return (
        <span 
          className={`inline-flex items-center gap-1 font-medium rounded-md bg-blue-50/70 text-blue-900 border border-blue-200/80 shadow-2xs ${
            isSm ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'
          }`}
          title="Contains fresh milk, cream, or cheese"
        >
          <Milk className={isSm ? "w-3 h-3 text-blue-600" : "w-3.5 h-3.5 text-blue-600"} />
          <span>{tag.label}</span>
        </span>
      );

    case 'pure-veg':
    default:
      return (
        <span 
          className={`inline-flex items-center gap-1 font-semibold rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs ${
            isSm ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-0.5 text-xs'
          }`}
          title="100% Pure Vegetarian"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span>{tag.label}</span>
        </span>
      );
  }
};
