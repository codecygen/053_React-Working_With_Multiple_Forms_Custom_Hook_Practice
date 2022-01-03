import React from 'react';
import { useState } from 'react';
import useSubmit from '../hooks/use-submit';

const BasicForm = (props) => {

  const {
    inputValue: nameInput, 
    inputChangeHandler: nameInputChangeHandler
  } = useSubmit();

  const [isNameInputTouched, setIsNameInputTouched] = useState(false);

  const isNameInputValid = nameInput.trim().length !== 0;

  const nameHasError = !isNameInputValid && isNameInputTouched;

  let formHasError = true;

  if (nameHasError) {
    formHasError = true;
  } else {
    formHasError = false;
  }

  const nameInputBlurHandler = event => {
    setIsNameInputTouched(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (formHasError) {
      return;
    }

    console.log(`Submitted value: ${nameInput}`);

    setIsNameInputTouched(false);
    // setNameInput('');
  };


  const nameInputClass = nameHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>

        <div className={nameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameInput}
          />
          {nameHasError && <p className='error-text'>Please entere a valid name.</p>}
        </div>

        {/* <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>

        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' />
        </div> */}
        
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
