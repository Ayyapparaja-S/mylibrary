import React from 'react';
import { Button as MuiButton, type ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label?: string;
}

const Button: React.FC<CustomButtonProps> = ({ label = 'Click me', ...props }) => {
  return (
    <MuiButton variant="contained" color="primary" {...props}>
      {label || props.children}
    </MuiButton>
  );
};

export default Button;
