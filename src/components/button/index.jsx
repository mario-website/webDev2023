import React from 'react';
import './index.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  className,
  secondary,
  ...props
}) => {
  const buttonStyle = secondary ? 'secondary' : 'primary';

  return (
    <button
      type={type}
      className={`button ${buttonStyle} ${className}`}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
