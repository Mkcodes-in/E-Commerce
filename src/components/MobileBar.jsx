import React from 'react';
import { NavLink } from 'react-router-dom';


export default function MobileBar({NavItem}) {
  return (
    <div className='block sm:hidden fixed bottom-0 left-0 right-0 py-3 bg-white w-full shadow-2xl border-t border-gray-100 rounded-t-2xl'>
      <div className='flex justify-around items-center px-2'>
        {NavItem.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={`/${item.name === 'home' ? '' : item.name}`}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "text-green-600 font-semibold bg-green-50" 
                    : "text-gray-500 hover:text-green-500"
                }`
              }
            >
              <Icon size={20} />
              <span className='text-xs mt-1 capitalize'>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}