import React from 'react';
import './WhyChooseUs.css';

const FeatureCard = ({ imageSrc, title }) => {
  return (
    <div className='feature-card'>
      <img className='feature-image' src={imageSrc} alt={`${title} image`} />
      <h4 className='feature-title'>{title}</h4>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className='whychooseus-container'>
      <div className='whychooseus-content'>
        <h1 className='whychooseus-main-heading'>Why Choose Us</h1>
        <p className='whychooseus-main-para'>
          We have already set our standards high from other retailers in the industry due to the strong commitment to the service we provide,
          we are one of the few retailers who are on top of their business, standing out from the others.
        </p>
      </div>

      <div className='feature-cards'>
        <FeatureCard imageSrc='https://saina-doors.com/wp-content/uploads/2021/08/machines.png' title='TECHNICAL MACHINES' />
        <FeatureCard imageSrc='https://saina-doors.com/wp-content/uploads/2021/08/customers.png' title='EXPERIENCED TEAM' />
        <FeatureCard imageSrc='https://saina-doors.com/wp-content/uploads/2021/08/sell-out.png' title='QUALITY PRODUCTS' />
      </div>
    </div>
  );
};

export default WhyChooseUs;
