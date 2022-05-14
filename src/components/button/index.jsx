import React from 'react';
import PropTypes from 'prop-types';
import style from './index.style'


const Button = ({ type, ...rest }) => {
  return (
    <button type={type}>
      뻐튼!
    </button>
  )
}