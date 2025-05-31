import React, { useState } from 'react';
import "../CSS/Search.css"
import Home from '../Components/Home';
import searchIcon from '../../public/search-normal.svg';
import framImage from '../../public/framimage.svg';

const phoneModels = [
  { id: 'x', name: 'X Case', count: '' },
  { id: '11', name: '11 Case', count: '' },
  { id: '11pro', name: '11 Pro Case', count: '' },
  { id: '11promax', name: '11 Promax Case', count: '' },
  { id: '12', name: '12 Case', count: '' },
  { id: '12mini', name: '12 mini Case', count: '' },
  { id: '12pro', name: '12 Pro Case', count: '' },
  { id: '12promax', name: '12 Promax Case', count: '' },
  { id: '13', name: '13 Case', count: '13' },
  { id: '13mini', name: '13 mini Case', count: '' },
  { id: '13case', name: '13 Case', count: '13' },
  { id: '13pro', name: '13 Pro Case', count: '13' },
  { id: '13promax', name: '13 Promax Case', count: '13' },
  { id: 'se', name: 'SE Case', count: '' },
  { id: '14', name: '14 Case', count: '' },
  { id: '14plus', name: '14 Plus Case', count: '' },
  { id: '14pro', name: '14 Pro Case', count: '' },
  { id: '14promax', name: '14 Promax Case', count: '' }
];

const products = [
  { id: 1, img: framImage, title: 'Red Case' },
  { id: 2, img: framImage, title: 'Yellow Case' },
  { id: 3, img: framImage, title: 'Orange Case' },
  { id: 4, img: framImage, title: 'Purple Case' },
  { id: 5, img: framImage, title: 'Pink Case' },
  { id: 6, img: framImage, title: 'Green Case' }  
];

const PhoneCaseCatalog = () => {
  const [selectedModel, setSelectedModel] = useState('13');
  const [searchQuery, setSearchQuery] = useState('Phone Case');
  

  return (
    <>
    <div className="phone-catalog">
    <div className="search-container">
  <input
    type="text"
    className="search-input"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search Phone Case"
  />

<img src={searchIcon} alt="Search Icon" className="search-icon" />

   <button
    className="clear-btn"
    onClick={() => setSearchQuery('')}
    aria-label="Clear search"
  >
    &times;
  </button>
</div>

      <div className="main-content">
      <div className="sidebar">
  <ul className="phone-models">
    {phoneModels.map((model) => (
      <li
        key={model.id}
        className={`phone-model ${selectedModel === model.id ? 'active' : ''}`}
        onClick={() => setSelectedModel(model.id)}
      >
        {model.name}
      </li>
    ))}
  </ul>
</div>

       <div className="products-grid">
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.img} alt={product.title} />
      <p>{product.title}</p>
    </div>
  ))}
</div>
      </div>
    </div>
    <Home />
    </>
  );
};

export default PhoneCaseCatalog;
