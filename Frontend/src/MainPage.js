import React, { useState } from 'react';
import WhatToCook from './WhatToCook';
import WhatToBuy from './WhatToBuy';
import './MainPage.css';

function MainPage() {
  const [selectedHeader, setSelectedHeader] = useState(null);

  const handleHeaderClick = (header) => {
    if (header === selectedHeader) {
      return;
    }
    setSelectedHeader(header);
  };

  return (
    <div className="allContent">
        <div className="header-container">
            <h2 onClick={() => handleHeaderClick('What to Cook')} 
                style={{ cursor: selectedHeader === 'What to Buy' ? 'pointer' : 'default', 
                         fontWeight:  (selectedHeader === 'What to Cook' || !selectedHeader) ? 'bold' : 'normal', 
                         opacity: (selectedHeader === 'What to Cook' || !selectedHeader) ? 1 : 0.5}}>
                What to Cook
            </h2>
            <h2 onClick={() => handleHeaderClick('What to Buy')} 
                style={{ cursor: (selectedHeader === 'What to Cook'|| !selectedHeader) ? 'pointer' : 'default', 
                         fontWeight:  selectedHeader === 'What to Buy' ? 'bold' : 'normal',
                         opacity: selectedHeader === "What to Buy" ? 1 : 0.5 }}>
                What to Buy
            </h2>
        </div>
        <div className="content">
            {(selectedHeader === 'What to Cook' || !selectedHeader) && <WhatToCook />}
            {selectedHeader === 'What to Buy' && <WhatToBuy />}
        </div>
    </div>
    
  );
}

export default MainPage;
