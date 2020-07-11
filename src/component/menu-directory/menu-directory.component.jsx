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
                imageUrl:'https://i.iib.co/cvpntL1/hats.png',
                linkUrl:'hats',
                id:1
            },
            {
                title:'jackets',
                imageUrl:'https://i.iib.co/px2tCc3/jackets.png',
                linkUrl:'jackets',
                id:2
            },
            {
                title:'sneakers',
                imageUrl:'https://i.iib.co/0jqHpnp/sneakers.png',
                linkUrl:'sneakers',
                id:3
            },
            {
                title:'women',
                imageUrl:'https://i.iib.co/GCCdy8t/womens.png',
                linkUrl:'women',
                size:'large',
                id:4
            },
            {
                title:'men',
                imageUrl:'https://i.iib.co/men.png',
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