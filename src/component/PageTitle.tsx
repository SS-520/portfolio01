import React from 'react';
import './pageTitle.css';

function PageTitle(props: {pageTitle: string }) {
  return (
    <h1 className='page-title'>{props.pageTitle}</h1>
  );
}

export default PageTitle;
