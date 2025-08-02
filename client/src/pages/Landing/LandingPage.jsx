import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaFilm, FaUsers, FaHeart, FaStar, FaComment } from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className='landing-page'>
      {/* Hero Section */}
      <section className='hero-section'>
        <h1>Scene By Scene</h1>
        <p>
          Discover the magic behind every story. Dive deep into books and movies 
          with detailed scene-by-scene analysis, reviews, and insights.
        </p>
        <button 
          className='cta-button'
          onClick={() => navigate('/books')}
        >
          Start Exploring
        </button>
      </section>

      {/* Main Content Sections */}
      <section className='content-sections'>
        <div className='section-container'>
          <div className='sections-grid'>
            
            {/* Books Section */}
            <div className='content-section books-section'>
              <div className='section-image'>
                <FaBook className='image-icon' />
              </div>
              <div className='section-content'>
                <h2>Books</h2>
                <p>
                  Explore literary masterpieces with our comprehensive book analysis. 
                  From character development to thematic elements, discover what makes 
                  great stories unforgettable.
                </p>
                <ul className='feature-list'>
                  <li>Chapter-by-chapter breakdowns</li>
                  <li>Character analysis & development</li>
                  <li>Theme exploration</li>
                  <li>Literary devices & techniques</li>
                  <li>Reader discussions & reviews</li>
                </ul>
                <button 
                  className='section-button books-btn'
                  onClick={() => navigate('/books')}
                >
                  Explore Books
                </button>
              </div>
            </div>

            {/* Movies Section */}
            <div className='content-section movies-section'>
              <div className='section-image'>
                <FaFilm className='image-icon' />
              </div>
              <div className='section-content'>
                <h2>Movies</h2>
                <p>
                  Dive into the world of cinema with detailed scene analysis. 
                  Understand cinematography, storytelling techniques, and the art 
                  of visual narrative.
                </p>
                <ul className='feature-list'>
                  <li>Scene-by-scene breakdowns</li>
                  <li>Cinematography analysis</li>
                  <li>Director's vision & style</li>
                  <li>Performance reviews</li>
                  <li>Community discussions</li>
                </ul>
                <button 
                  className='section-button movies-btn'
                  onClick={() => navigate('/movies')}
                >
                  Explore Movies
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='stats-section'>
        <div className='stats-grid'>
          <div className='stat-item'>
            <div className='stat-number'>500+</div>
            <div className='stat-label'>Books Analyzed</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>1000+</div>
            <div className='stat-label'>Movies Reviewed</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>10K+</div>
            <div className='stat-label'>Active Users</div>
          </div>
          <div className='stat-item'>
            <div className='stat-number'>50K+</div>
            <div className='stat-label'>Scene Analysis</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;
