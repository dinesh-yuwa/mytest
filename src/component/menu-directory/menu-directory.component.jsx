import React from 'react';
import './menu-directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


class MenuDirectory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[

            {
                title:'hats',
                imageUrl:'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                linkUrl:'hats',
                id:1
            },
            {
                title:'jackets',
                imageUrl:'https://i.ibb.co/XzcwL5s/black-shearling.png',
                linkUrl:'jackets',
                id:2
            },
            {
                title:'sneakers',
                imageUrl:'https://i.ibb.co/dJbG1cT/yeezy.png',
                linkUrl:'sneakers',
                id:3
            },
            {
                title:'women',
                imageUrl:'https://i.ibb.co/7CQVJNm/blue-tank.png',
                linkUrl:'women',
                size:'large',
                id:4
            },
            {
                title:'men',
                imageUrl:'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                linkUrl:'men',
                size:'large',
                id:5
            }]

        };


    }

    render(){

        return(

            <div className='menu-directory'>
                    {this.state.sections.map(({id,...otherSectionProps}) =>(
                        
                        <MenuItem key={id} {...otherSectionProps}/>
                        
                    ))}
                    
                            
            </div>
        );

    }

}



export default MenuDirectory;