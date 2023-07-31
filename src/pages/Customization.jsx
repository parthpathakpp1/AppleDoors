import React from 'react';
import Header from '../components/Header/Header';
import './Customization.css';
import { useParams } from 'react-router-dom';

const Customization = () => {
  const { doorName } = useParams();
  return (
    <>
    <Header />
    <div className="customization-page">
      <h2>Customization</h2>
      <p>This is the customization page of {doorName}.</p>
    </div>
    </>
  );
};

export default Customization;
