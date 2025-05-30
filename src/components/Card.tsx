import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  // Define base card styles
  const baseStyles = "bg-white p-6 rounded-lg shadow";

  // Combine base styles with any additional classes passed via props
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Card;