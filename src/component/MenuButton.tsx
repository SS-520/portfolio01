import React from 'react';
import './MenuButton.css';

function MenuButton(props: {buttonLabel: string, buttonName: string, buttonIcon: any, isUse: boolean}) {
  return (
    <button className='menu-button common-container' type='button' name={props.buttonName} disabled={props.isUse}>
      <span className='menu-button-icon'>{props.buttonIcon}</span>
      {props.buttonLabel}
    </button>
  );
}

export default MenuButton;
