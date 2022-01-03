import React from 'react';
import { useState } from 'react';

const BasicForm = (props) => {

  const [nameInput, setNameInput] = useState('');
  const [isNameInputTouched, setIsNameInputTouched] = useState(false);

  const isNameInputValid = nameInput.trim().length !== 0;

  const isNameValid = isNameInputValid && isNameInputTouched;

  console.log(nameInput);
  console.log(isNameValid);

  const nameInputChangeHandler = event => {
    setNameInput(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setIsNameInputTouched(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    // console.log(na)
  };



  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>

        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>

        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' />
        </div>
        
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
