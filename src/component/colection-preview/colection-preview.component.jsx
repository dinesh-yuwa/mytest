import React from 'react';


const ColectionPreview=({title,items})=>(

   <div colection-preview>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
         { items.map(item =>(              
            <div key={items.id} >{item.name}{item.price}
            {<img alt='imageName' src={item.imageUrl} />}  
            </div>              
         ))}
      </div>
   </div>
)
export default ColectionPreview;