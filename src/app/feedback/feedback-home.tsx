'use client';
import React, { useState } from 'react';

const FeedbackHome = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="card border-0 shadow-lg p-5 w-100" style={{ maxWidth: 480, borderRadius: '20px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
        <div className="text-center mb-5">
          <div className="mb-3">
            <span className="display-4 fw-bold" style={{ background: 'linear-gradient(45deg, #ff6b6b, #feca57)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Feedback
            </span>
          </div>
          <p className="text-muted">We'd love to hear your thoughts!</p>
        </div>
        {submitted ? (
          <div className="text-center">
            <div className="mb-4">
              <span style={{ fontSize: '4rem' }}>🎉</span>
            </div>
            <h4 className="text-success fw-bold mb-2">Thank You!</h4>
            <p className="text-muted">Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="form-label fw-semibold text-dark mb-3">How would you rate your experience?</label>
              <div className="d-flex justify-content-center mb-3">
                {[0, 1, 2, 3, 4].map((starIndex) => (
                  <button
                    key={starIndex}
                    type="button"
                    className="btn btn-link p-0 me-3"
                    onClick={() => handleStarClick(starIndex)}
                    style={{
                      fontSize: '2.5rem',
                      color: starIndex < rating ? '#ffd700' : '#e0e0e0',
                      transition: 'all 0.3s ease',
                      filter: starIndex < rating ? 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (rating === 0) {
                        e.currentTarget.style.color = '#ffd700';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (rating === 0) {
                        e.currentTarget.style.color = '#e0e0e0';
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              <div className="text-center">
                <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '0.9rem' }}>
                  {rating === 0 && 'Click to rate'}
                  {rating === 1 && 'Poor'}
                  {rating === 2 && 'Fair'}
                  {rating === 3 && 'Good'}
                  {rating === 4 && 'Very Good'}
                  {rating === 5 && 'Excellent'}
                </span>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="comment" className="form-label fw-semibold text-dark mb-3">Tell us more about your experience</label>
              <textarea
                className="form-control border-0"
                id="comment"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts, suggestions, or any other feedback..."
                style={{
                  borderRadius: '15px',
                  background: '#f8f9fa',
                  padding: '15px',
                  fontSize: '1rem',
                  resize: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.background = '#fff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.background = '#f8f9fa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <button
              type="submit"
              className="btn w-100 rounded-pill fw-bold py-3"
              disabled={rating === 0}
              style={{
                background: rating === 0 ? '#e0e0e0' : 'linear-gradient(45deg, #ff6b6b, #feca57)',
                color: rating === 0 ? '#999' : '#fff',
                border: 'none',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                transform: rating === 0 ? 'none' : 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                if (rating !== 0) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (rating !== 0) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackHome;
