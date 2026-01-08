import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ChevronRight, Star, Calendar, Menu, X } from 'lucide-react';
import './styles.css';
import SignupModal from './components/SignupModal';

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Movies');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['Movies', 'Events', 'Standup'];

  const movies = [
    { id: 1, title: 'Justice League', rating: 9.2, genre: 'Action/Drama', image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop', votes: '245K' },
    { id: 2, title: 'Avatar 3', rating: 8.9, genre: 'Sci-Fi/Adventure', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop', votes: '189K' },
    { id: 3, title: 'Dune Messiah', rating: 9.1, genre: 'Sci-Fi/Drama', image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop', votes: '312K' },
    { id: 4, title: 'Inception ', rating: 8.7, genre: 'Thriller/Sci-Fi', image: 'https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8', votes: '278K' },
    { id: 5, title: 'The Dark Knight Rises', rating: 9.0, genre: 'Action/Crime', image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg', votes: '423K' },
    { id: 6, title: 'Interstellar', rating: 9.3, genre: 'Sci-Fi/Drama', image: 'https://play-lh.googleusercontent.com/D5FtnFBPO_FitBIqjCffRZrhZf84Xm3mVoqQDUD2ZGq-Z4LftUotgRj4WquMQhDs1nL46NQxu7Rr2ahbFrWM=w240-h480-rw', votes: '567K' }
  ];

  const events = [
    { id: 1, title: 'Arijit Singh Live', date: 'Jan 15', venue: 'Bangalore Palace', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop' },
    { id: 2, title: 'Comedy Nights', date: 'Jan 20', venue: 'Chowdiah Hall', image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400&h=300&fit=crop' },
    { id: 3, title: 'Art Exhibition', date: 'Jan 25', venue: 'National Gallery', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop' },
    { id: 4, title: 'Food Festival', date: 'Feb 5', venue: 'Cubbon Park', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="landing-page">
      {/* Navbar */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <div className="nav-left">
            <motion.h1
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ShowBook
            </motion.h1>
            <div className="nav-links desktop-only">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`nav-link ${selectedCategory === cat ? 'active' : ''}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="nav-right">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search for Movies, Events..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <motion.div
              className="location-selector"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={16} />
              <span>Bengaluru</span>
            </motion.div>
            <div className="auth-buttons desktop-only">
              <motion.button
                className="auth-btn signup-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowSignup(true)}
              >
                Sign up
              </motion.button>
            </div>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setMobileMenuOpen(false);
                }}
                className={`mobile-menu-item ${selectedCategory === cat ? 'active' : ''}`}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
            <div style={{marginTop:12}}>
              <motion.button
                className="mobile-action-btn"
                onClick={() => { setShowSignup(true); setMobileMenuOpen(false); }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSignup && (
        <SignupModal onClose={() => setShowSignup(false)} onSuccess={() => setShowSignup(false)} />
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-banner">
            <motion.img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&h=600&fit=crop"
              alt="Hero"
              className="hero-image"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="hero-overlay">
              <motion.div
                className="hero-content"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="hero-title">Experience the Magic</h2>
                <p className="hero-subtitle">
                  Book tickets for movies, events, and live shows in your city
                </p>
                <motion.button
                  className="hero-cta"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Now
                  <ChevronRight size={20} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recommended Movies */}
      <section className="movies-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-title">Recommended Movies</h3>
            <motion.button
              className="see-all-btn"
              whileHover={{ x: 5 }}
            >
              See All <ChevronRight size={20} />
            </motion.button>
          </motion.div>
          <motion.div
            className="movies-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {movies.map((movie) => (
              <motion.div
                key={movie.id}
                className="movie-card"
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
              >
                <motion.div className="movie-image-container" variants={cardHoverVariants}>
                  <img src={movie.image} alt={movie.title} className="movie-image" />
                  <div className="movie-rating">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <span>{movie.rating}</span>
                  </div>
                  <motion.div
                    className="movie-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="book-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </motion.div>
                </motion.div>
                <div className="movie-info">

          
                  <h4 className="movie-title">{movie.title}</h4>
                  <p className="movie-genre">{movie.genre}</p>
                  <p className="movie-votes">{movie.votes} votes</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Events */}
      <section className="events-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-title">The Best of Live Events</h3>
            <motion.button
              className="see-all-btn"
              whileHover={{ x: 5 }}
            >
              See All <ChevronRight size={20} />
            </motion.button>
          </motion.div>
          <motion.div
            className="events-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                className="event-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="event-image-container">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div className="event-overlay">
                    <div className="event-info">
                      <h4 className="event-title">{event.title}</h4>
                      <div className="event-details">
                        <div className="event-detail">
                          <Calendar size={16} />
                          <span>{event.date}</span>
                        </div>
                        <div className="event-detail">
                          <MapPin size={16} />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premier Section */}
      <section className="premier-section">
        <div className="section-container">
          <motion.div
            className="premier-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="premier-content">
              <h3 className="premier-title">Premieres</h3>
              <p className="premier-subtitle">Brand new releases every week</p>
              <motion.button
                className="premier-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Premieres
              </motion.button>
            </div>
            <motion.div
              className="premier-image-container"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=400&fit=crop"
                alt="Premier"
                className="premier-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;