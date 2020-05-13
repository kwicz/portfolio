import React from 'react';
import { Link } from 'gatsby';

export default function Header({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">     
        <span>
          <img width="75%" src={avatar} alt="" />
        </span>
        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
