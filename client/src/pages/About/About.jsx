import React from 'react';
import "./About.css";
import { 
  FaEye, 
  FaUsers, 
  FaBook, 
  FaFilm, 
  FaSearch, 
  FaHeart, 
  FaLightbulb, 
  FaStar,
  FaRocket,
  FaGraduationCap,
  FaHandshake
} from 'react-icons/fa';

function About() {
  return (
    <div className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">Discover Our Story</div>
          <h1 className="hero-title">
            Scene By <span className="highlight">Scene</span>
          </h1>
          <p className="hero-subtitle">
            Where every frame tells a story, every page reveals a secret, and every analysis 
            unlocks the magic hidden within the world's greatest books and movies.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              From a simple idea to a thriving community of storytelling enthusiasts 
              who believe in the power of detailed analysis.
            </p>
          </div>
          
          <div className="story-grid">
            <div className="story-content">
              <h3>The Beginning</h3>
              <p className="story-text">
                It all started with a simple question: What if we could understand stories 
                the way their creators intended? What if every scene, every character 
                development, every visual metaphor was explained and appreciated?
              </p>
              <p className="story-text">
                <strong>Scene By Scene</strong> was born from this passion for deep 
                storytelling analysis. We believe that understanding the craft behind 
                great stories enhances our appreciation for both literature and cinema.
              </p>
              
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">15K+</span>
                  <span className="stat-label">Active Users</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2K+</span>
                  <span className="stat-label">Analyzed Works</span>
                </div>
              </div>
            </div>
            
            <div className="story-visual">
              <FaEye className="visual-icon" />
              <p className="visual-text">
                "Every scene has a purpose, every detail matters, every frame tells a story"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive analysis tools and insights for books and movies that help 
              you discover new layers of meaning in your favorite works.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <FaBook className="feature-icon" />
              <h3 className="feature-title">Scene-by-Scene Analysis</h3>
              <p className="feature-description">
                Detailed breakdowns of every important scene, revealing the techniques 
                and storytelling methods used by master creators.
              </p>
            </div>
            
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3 className="feature-title">Character Studies</h3>
              <p className="feature-description">
                Deep dives into character development, motivations, and arcs that 
                help you understand the psychology behind great characters.
              </p>
            </div>
            
            <div className="feature-card">
              <FaFilm className="feature-icon" />
              <h3 className="feature-title">Visual Storytelling</h3>
              <p className="feature-description">
                Analysis of cinematography, visual metaphors, and directing techniques 
                that bring stories to life on screen.
              </p>
            </div>
            
            <div className="feature-card">
              <FaSearch className="feature-icon" />
              <h3 className="feature-title">Thematic Exploration</h3>
              <p className="feature-description">
                Uncover the deeper themes, symbols, and messages that make stories 
                resonate across cultures and generations.
              </p>
            </div>
            
            <div className="feature-card">
              <FaLightbulb className="feature-icon" />
              <h3 className="feature-title">Expert Insights</h3>
              <p className="feature-description">
                Learn from film critics, literature professors, and industry professionals 
                who share their expert knowledge and perspectives.
              </p>
            </div>
            
            <div className="feature-card">
              <FaRocket className="feature-icon" />
              <h3 className="feature-title">Community Discussions</h3>
              <p className="feature-description">
                Join passionate discussions with fellow enthusiasts, share your own 
                insights, and discover new perspectives on beloved works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              To create a world where storytelling is appreciated not just for entertainment, 
              but as an art form that deserves deep analysis, understanding, and celebration. 
              We believe that every great story has layers waiting to be discovered.
            </p>
            
            <div className="mission-values">
              <div className="value-item">
                <FaGraduationCap className="value-icon" />
                <h3 className="value-title">Education</h3>
                <p className="value-description">
                  Teaching the art and craft of storytelling through detailed analysis.
                </p>
              </div>
              
              <div className="value-item">
                <FaHeart className="value-icon" />
                <h3 className="value-title">Passion</h3>
                <p className="value-description">
                  Driven by genuine love for stories and the art of narrative.
                </p>
              </div>
              
              <div className="value-item">
                <FaStar className="value-icon" />
                <h3 className="value-title">Quality</h3>
                <p className="value-description">
                  Providing accurate, insightful, and professionally crafted analysis.
                </p>
              </div>
              
              <div className="value-item">
                <FaHandshake className="value-icon" />
                <h3 className="value-title">Community</h3>
                <p className="value-description">
                  Building a welcoming space for all storytelling enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Community</h2>
            <p>
              Ready to discover the hidden depths of your favorite stories? 
              Start your journey with Scene By Scene today.
            </p>
            <a href="/register" className="cta-button">Get Started Now</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
