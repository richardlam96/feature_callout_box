import React from 'react';
import '../styles/FeatureList.css';

import FeatureItem from './FeatureItem';


const FeatureList = () => {

  // Hard-coded normalized data.
  let featuresByName = {
    'Fire Risk': 3,
    'Flood Risk': 8,
    'Hurricane Risk': 5,
    'Storm Risk': 6,
    'Crime Rate': 1,
  };

  let featureNames = [
   'Fire Risk',
   'Flood Risk',
   'Hurricane Risk',
   'Storm Risk',
   'Crime Rate'
  ];


  let featureListTitle = "Risk Summary";

  let featureList = featureNames.map((featureName, idx) => (
    <li key={ idx }>
      <FeatureItem
        name={ featureName } 
        rating={ featuresByName[featureName] }
      />
    </li>
  ));

  return (
    <div className="feature-list-component">

      <div className="feature-list-title">
        { featureListTitle }
      </div>

      <ul className="feature-list">
        { featureList }
      </ul>

    </div>
  );
};


export default FeatureList;
