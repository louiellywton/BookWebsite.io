import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-body">
        <div className="logo-header">Liberio</div>
        <div className="search-bar">
          <div className="categories">All Categories</div>
          <div className="expand-icon">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
          <div className="vl"></div>
          <div className="search">
            <input type="text" placeholder="Search by title / author / ISBN" />
          </div>
          <div className="search-icon">
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
        <div className="icon-header">
          <div className="wishlist-icon">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <div className="wishlist-icon">
            <span className="material-symbols-outlined">shopping_bag</span>
          </div>
          <div className="wishlist-icon">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;