import { useState, useEffect } from 'react';
import './style.css';

const Ribbon = ({ children, discountText = "50% OFF", position = "top-right" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className={`sexy-ribbon-wrapper ${position.replace('-', ' ')}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`sexy-ribbon ${isHovered ? 'hover' : ''} ${isMobile ? 'mobile' : ''}`}>
        <span className="ribbon-text">{discountText}</span>
        <div className="ribbon-fold"></div>
      </div>
      {children}
    </div>
  );
};

export default Ribbon;