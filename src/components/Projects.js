import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import movie from './Movie_pr.jpeg';
import recipe from './Recipe_pr.jpeg';

const Projects = () => {
    const imgStyle = {
      maxWidth: '30%', // Adjust size as needed
      height: 'auto',
      margin: '0 auto',
    };
  
    const legendStyle = {
      fontSize: '0.8rem', // Smaller font size for the legend
      color: 'white',
      marginTop: '10px',
      width: '300px',
      
    };
  
    return (
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={movie} alt="Project 1" style={imgStyle} />
            <p className="legend" style={legendStyle}>Project 1</p>
          </div>
          <div>
            <img src={recipe} alt="Project 2" style={imgStyle} />
            <p className="legend" style={legendStyle}>Project 2</p>
          </div>
          {/* Add more projects */}
        </Carousel>
      </section>
    );
  };
  export default Projects;