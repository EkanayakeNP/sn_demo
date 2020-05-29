import React from 'react';
import Ingredient from './Ingredient';

const IngerdientList = props=>{

    return(
        <section>
            <h2>Loded Ingerdinets</h2>
            <ul>
                {props.ingredients.map(ig => (
                    <li className='list' key={ig.id} onClick={props.onRemoveItem.bind(this,ig.id)}>
                    <span style={{padding:"0 20px 0 0"}}>{ig.title}</span>                   
                    <span>{ig.amount}x</span>
                    </li>
                )

                )}
            </ul>
        </section>
    )
}
export default IngerdientList;