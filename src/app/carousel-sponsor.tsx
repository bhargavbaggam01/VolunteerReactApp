'use client';
import React, { useEffect } from 'react';

const sponsors = [
  {
    name: 'Sponsor One',
    img: '/images/a1.jpg',
    link: '#',
  },
  {
    name: 'Sponsor Two',
    img: '/images/a2.jpg',
    link: '#',
  },
  {
    name: 'Sponsor Three',
    img: '/images/a3.jpg',
    link: '#',
  },
];

export const CarouselSponsor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ 
          background: 'linear-gradient(45deg, #667eea, #764ba2)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem'
        }}>
          Our Featured Sponsors
        </h2>
        <p className="text-muted">Discover the amazing companies that support our mission</p>
      </div>
      
      <div id="sponsorCarousel" className="carousel slide" data-bs-ride="carousel" style={{ borderRadius: '20px', overflow: 'hidden' }}>
        <div className="carousel-inner" style={{ 
          borderRadius: '20px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          {sponsors.map((sponsor, idx) => (
            <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={sponsor.name}>
              <div
                className="d-flex flex-column align-items-center justify-content-center py-5 px-2"
                style={{ minHeight: 280 }}
              >
                <div className="mb-2" style={{
                  padding: '15px',
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  width: '90%'
                }}>
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className="w-100"
                    style={{ 
                      height: 'auto', 
                      maxWidth: '150%', 
                      maxHeight: 280, 
                      objectFit: 'contain', 
                      borderRadius: '10px',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div className="text-center">
                  <h4 className="fw-bold mb-2" style={{ 
                    background: 'linear-gradient(45deg, #fff, #f0f0f0)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}>
                    {sponsor.name}
                  </h4>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#sponsorCarousel" 
          data-bs-slide="prev"
          style={{
            width: '50px',
            height: '50px',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            margin: 'auto 20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#sponsorCarousel" 
          data-bs-slide="next"
          style={{
            width: '50px',
            height: '50px',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            margin: 'auto 20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};


