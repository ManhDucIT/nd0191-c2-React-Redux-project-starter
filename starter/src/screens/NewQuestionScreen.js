import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createQuestion } from '../actions/questionsActions';
import styles from '../css/NewQuestionScreen.module.css';

const NewQuestionScreen = () => {
  const users = useSelector(state => state.users.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!optionOne) {
      errors.optionOne = 'Option one is required';
    }

    if (!optionTwo) {
      errors.optionTwo = 'Option two is required';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        createQuestion({
          optionOne,
          optionTwo
        })
      );
      
      navigate('/', { state: { isFromNewQuestion: true } });
    }
  };

  return (
    <div className={styles["container"]}>
        <div className={styles["login-box"]}>
            <h2>Create a poll</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <input
                type="text"
                name="optionOne"
                placeholder="Enter option 1"
                value={optionOne}
                onChange={(e) => setOptionOne(e.target.value)}
                className={errors.optionOne ? styles["error"] : ""}
                />
                {errors.optionOne && <div className={styles["error-text"]}>{errors.optionOne}</div>}
            </div>
            <div>
                <input
                type="password"
                name="optionTwo"
                placeholder="Enter option 2"
                value={optionTwo}
                onChange={(e) => setOptionTwo(e.target.value)}
                className={errors.optionTwo ? styles["error"] : ""}
                />
                {errors.optionTwo && <div className={styles["error-text"]}>{errors.optionTwo}</div>}
            </div>
            <button type="submit">Create</button>
            </form>
        </div>
    </div>
  );
};

export default NewQuestionScreen;