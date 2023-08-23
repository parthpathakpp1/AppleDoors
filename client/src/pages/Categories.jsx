import React from 'react';
import './Categories.css';
import Header from '../components/Header/Header';
import LandingFooter from '../components/Footer/Footer';
import useCategory from '../hooks/useCategory';

const Categories = () => {
  const categories = useCategory();

  return (
    <>
      <Header />
      <div className='category-heading'>
      <h1>Categories</h1>
      </div>
      <div className="category-list">
        {categories.map((c) => (
          <div className="category-item" key={c._id}>
            <a href={`/category/${c.slug}`} className="cat-btn">
              {c.name}
            </a>
          </div>
        ))}
      </div>
      <LandingFooter />
    </>
  );
};

export default Categories;
