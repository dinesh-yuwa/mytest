import React from 'react';
import ColectionItem from '../../component/colection-item/colection-item.component';

const ColectionPreview=({title,items})=>(

   <div className='colection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
         { items.filter((items,idx)=>idx < 4)
         .map(item =>(              
            <ColectionItem key={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}/>              
         ))}
      </div>
   </div>
)
export default ColectionPreview;