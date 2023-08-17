import React from 'react';
import './CategoryForm.css'; // Import the CSS file

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <form onSubmit={handleSubmit} className='category-form'>
      <div className='mb-3'>
        <input
          type='text'
          className='category-input'
          placeholder='Enter new category'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button type='submit' className='category-submit-btn'>
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
