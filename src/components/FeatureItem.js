import React from 'react';
import '../styles/FeatureItem.css';


const FeatureItem = ({ name, rating }) => {
  return (
    <div className="feature-item-component">

      <div className="feature-name">
        { name }
      </div>

      <div className="feature-scale">
        <div className="feature-scale-bar" style={{ width: `${ rating * 10 }%` }}>
          { rating }
        </div>
      </div>

    </div>
  );
};


export default FeatureItem;
