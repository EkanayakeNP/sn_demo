import React, { useState, useEffect,useCallback } from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredient = () => {

   
    const [userIngredients, setUserIngredients] = useState([]);

    // useEffect(() => {

    //     fetch('https://sn-demo-90d45.firebaseio.com/ingerdients.json')
    //     .then(response => response.json()

    //     ).then(responseData => {
    //         const loadedIngredients = [];
    //         for (const key in responseData) {
    //             loadedIngredients.push({
    //                 id: key,
    //                 title: responseData[key].title,
    //                 amount: responseData[key].amount
    //             })

    //         }
    //         setUserIngredients(loadedIngredients);
    //     });

    //  },[]);

   
     const filteredIngerdientHandler= useCallback(filteredIngredients=>{
         setUserIngredients(filteredIngredients);
     },[]);

    const addIngredientHandler = ingredient => {
        fetch('https://sn-demo-90d45.firebaseio.com/ingerdients.json', {
            method: 'POST',
            body: JSON.stringify(ingredient),
            headers: { 'Content-type': 'application/json' }
        }).then(response => {
            return response.json();
        }).then(responsedata => {
            setUserIngredients(preIngredients => [...preIngredients,
            { id: responsedata.name, ...ingredient }])
        })


    }

    return (
        <div>
            <IngredientForm onAddIngredient={addIngredientHandler} />
            <section>
               <Search onloadIngredients={filteredIngerdientHandler}></Search>
                <IngredientList ingredients={userIngredients} onRemoveItem={() => { }} />
            </section>
        </div>
    );


}
export default Ingredient;