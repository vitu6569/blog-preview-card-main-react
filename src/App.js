import React, { useState } from 'react';
import illustration from './assets/images/illustration-article.svg'
import './style.css'

function Card() {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="card"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', boxShadow: isHovered ? '15px 15px 0 2px' : ' 7px 7px 0px 2px',}}
    >
      <img id='illustration-article' src={illustration} alt="illustration-article"/>
      <div id='title'>
          <div id='learning'>Learning</div>
          <div id='date'>Published 21 Dec 2023</div>
      </div>  
      <div id="description">
          <div id="titleDescription">
              <a href="https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS/hub">HTML & CSS foundations</a>
          </div>
          <div id="textDescription">These languages are the backbone of every website, defining structure, content, and presentation.</div>
      </div>
      <div id="profile">
          <div id="imageProfile"></div>
          <div id="nameProfile">Greg Hooper</div>
      </div>
    
    </div>
    
  );
}

export default Card;
