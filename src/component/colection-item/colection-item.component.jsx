import React from 'react';
import './colection-item.style.scss';

const ColectionItem=( {name,price,imageUrl}) =>(
    <div className='colection-item'>
        <div className='colection-image' style={{backgroundImage:`url(${imageUrl})`}}>
            <div className='colection-footer'>           
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            
        </div>   
          
    </div>  
            
        
    
    




);

export default ColectionItem;