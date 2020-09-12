import React from 'react';
import Photo from '../img/photo.svg';

const BasicInfo = () => {
  return (
    <div className="infoBox">
      <img className="photo" src={Photo} alt="" />
      <div className="textContainer">
        <h4>Front-End Developer</h4>
        <p>Name: Bingze (Derrick) Song</p>
        <p>Age: 23</p>
        <p>Education: Bachelor of IT</p>
        <p>Email: sbz7drk@gmail.com</p>
        <p>Tel: 0414-780-112</p>
      </div>
    </div>
  );
};
export default BasicInfo;
