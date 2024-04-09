import React, { useState, useEffect } from 'react';
import './Home.css';
import { faArrowRight, faSearch, faHotel, faMapMarkerAlt, faUtensils, faBus, faPlane, faTrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = [
  require('../Images/home.webp'),
  // Remove other image imports
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home-container">
      <div className="side-image-container">
        <img 
          src={images[currentImageIndex]} 
          alt="Side Image" 
          className="side-image"
        />
      </div>
      <div className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Travel</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Offers</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
      <div className="explore-text">
        Explore<br />
        Japan
      </div>
      <div className="content">
        <h2>Discover</h2>
        <input type="text" placeholder="Search..." className="search-bar" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />

        <div className="card-container">
          <div className="card">
            <img src={require('../Images/home.webp')} alt="Card 1" className="card-image" />
          </div>
          <div className="card">
            <img src={require('../Images/home1.jpg')} alt="Card 2" className="card-image" />
          </div>
          <div className="card">
            <img src={require('../Images/home2.jpeg')} alt="Card 3" className="card-image" />
          </div>
        </div>

        <div className="description-cards">
          <div className="description-card">
            <div className="description-icon">
              <FontAwesomeIcon icon={faHotel} />
            </div>
            <div className="description-text">
              <h3>Hotels</h3>
              <p>Find the <br></br>hotels near <br></br>you</p>
            </div>
            <div className="description-search">
              <input type="text" placeholder="Search" className="small-search-bar" />
            </div>
          </div>

          <div className="description-card">
            <div className="description-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="description-text">
              <h3>Destination</h3>
              <p>Find the destination that you want to go</p>
            </div>
            <div className="description-search">
              <input type="text" placeholder="Search" className="small-search-bar" />
            </div>
          </div>

          <div className="description-card">
            <div className="description-icon">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <div className="description-text">
              <h3>Restaurant</h3>
              <p>Find the restaurants near you</p>
            </div>
            <div className="description-search">
              <input type="text" placeholder="Search" className="small-search-bar" />
            </div>
          </div>
        </div>

        {/* Add containers for bus, flight, and train */}
        <div className="transportation-container">
          <div className="transportation bus">
          <h3>Bus <FontAwesomeIcon icon={faBus} /> </h3>
            {/* Add bus related content here */}
          </div>
          <div className="transportation flight">
            <h3>Flight <FontAwesomeIcon icon={faPlane} /></h3>
            {/* Add flight related content here */}
          </div>
          <div className="transportation train">
            <h3>Train     <FontAwesomeIcon icon={faTrain} /></h3>
            {/* Add train related content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
