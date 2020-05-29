import React, { useState } from 'react';
import Card from './Card';
import './IngredinetForm.css';

const IngredientForm = React.memo(props => {
  //const [inputState,setInputState] = useState({title:'',amount:''});
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  }


  return (
    <section>
      <Card>
        <form className='login-form' onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title'
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }
              }
            />
          </div>



          <div className='form-control'>
            <label for='amount'>Amount</label>
            <input type='text' id='amount' value={enteredAmount}

              onChange={event => {
                setEnteredAmount(event.target.value);
              }
              }
            />
          </div>
          <div  style={{padding:"10px 10px 10px 10px"}}>

            <button className='login-btn' type='submit' >Add ingredient</button>
          </div>
        </form>
      </Card>
    </section >
  );


});

export default IngredientForm;