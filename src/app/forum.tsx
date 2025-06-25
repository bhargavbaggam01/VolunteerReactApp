'use client';
import React from 'react';

export const ForumLink = () => (
  <a
    href="#forum"
    title="Visit Forum"
    className="position-fixed rounded-circle shadow-lg d-flex align-items-center justify-content-center"
    style={{
      left: 24,
      bottom: 24,
      width: 60,
      height: 60,
      background: '#198754', // Bootstrap green
      color: '#fff',
      border: 'none',
      zIndex: 1050,
      transition: 'box-shadow 0.2s, background 0.2s',
      fontSize: 28,
      cursor: 'pointer',
      textDecoration: 'none',
    }}
    onMouseOver={e => (e.currentTarget.style.background = '#146c43')}
    onMouseOut={e => (e.currentTarget.style.background = '#198754')}
    aria-label="Open forum"
  >
    <span role="img" aria-label="forum">💬</span>
  </a>
);
