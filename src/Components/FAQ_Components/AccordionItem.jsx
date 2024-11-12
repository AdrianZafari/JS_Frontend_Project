import { useState } from 'react';

const AccordionItem = ({ concern }) => {
  
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-container">
      <button 
        className={`accordion-btn ${isActive ? 'active' : ''}`} 
        onClick={toggleActive}
      >
        {concern.title}
        <div className="accordion-chevron">
          <i className= {`light-show toggle-img fa-solid fa-chevron-up ${!isActive ? 'rotated' : ''}`} ></i>

          <i className= {`dark-show toggle-img fa-solid fa-chevron-up ${!isActive ? 'rotated' : ''}`} ></i>
        </div>
      </button>
      <div 
        className={`panel ${isActive ? 'open' : ''}`} 
        style={{ maxHeight: isActive ? `${concern.content.length * 1.2}em` : '0' }}
      >
        <p>{concern.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem
