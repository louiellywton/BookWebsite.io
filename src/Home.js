import "./Home.css"
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"

// Icons pake Assets..

function App() {
    return (
      <div>
        {/* Header */}
        <header>
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
        </header>
        {/* Body */}
        <body></body>
        {/* Footer */}
        <footer>
          <div className ="footer-body">
            <div className="row">
              <ul>
                <div className="row-title">
                  Information
                </div>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
              </ul> 
            </div>
            <div className="row">
            <ul>
              Follow Us
                <li>Baron Bramantyo</li>
                <li>Louie Llywton</li>
                <li>Jonathan Woen</li>
              </ul>
            </div>
            <div className="row">
            <ul>
              Contact Us
                <li>abcd</li>
                <li>efgh</li>
                <li>ijkl</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }

export default App