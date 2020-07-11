import React from 'react';
import SHOP_DATA from './shop.data';
import ColectionPreview from '../../component/colection-preview/colection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            colections:SHOP_DATA

        };

    }

    render(){

        return(
            <div>               
               {
                this.state.colections.map(({id,...otherColectionProps})=>(
                        <ColectionPreview key={id}{...otherColectionProps}/>

                ))}              

            </div>

        );
    }
}

export default ShopPage;