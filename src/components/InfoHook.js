import React from 'react';

export default function InfoHook(props) {
    const {
        title, value
    } = props;
  return (
    <>
    <div className='info'>
        <div className='imaginary-box'>
          <h2 className='Title'>{title}</h2>
          <p className='Value'>{value}</p>
        </div>
    </div>
    </>
  )
}
