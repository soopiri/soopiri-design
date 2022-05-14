import React from 'react';
import styled from 'styled-components';
import style from './index.style';

const MyButton = ({type, ...rest}) => {
  return (
    <button type="button" {...rest}>
      {rest.label}
    </button>
  );
};

const Button = styled(MyButton)(({type}) => {
  switch (type) {
    case 'primary':
      return style.Primary;
    case 'cancel':
      return style.Cancel;
    default:
      return style.Default;
  }
});

export default Button;
