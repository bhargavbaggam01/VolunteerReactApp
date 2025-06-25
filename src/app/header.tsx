'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const notifications = [
  { id: 1, text: 'Your event registration was approved.' },
  { id: 2, text: 'New sponsor joined the platform.' },
  { id: 3, text: 'Your profile was updated successfully.' },
];

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserPopover, setShowUserPopover] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const notifBtnRef = useRef<HTMLButtonElement>(null);
  const userBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
      const loggedInStatus = localStorage.getItem('loginState') === 'true';
      setIsLoggedIn(loggedInStatus);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('dark-mode', darkMode);
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifBtnRef.current &&
        !notifBtnRef.current.contains(event.target as Node) &&
        !document.getElementById('notif-popover')?.contains(event.target as Node)
      ) {
        setShowPopover(false);
      }
      if (
        userBtnRef.current &&
        !userBtnRef.current.contains(event.target as Node) &&
        !document.getElementById('user-popover')?.contains(event.target as Node)
      ) {
        setShowUserPopover(false);
      }
    };
    if (showPopover || showUserPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [darkMode, showPopover, showUserPopover]);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    setIsLoggedIn(false);
    setShowUserPopover(false);
  };

  const router = useRouter();
  const handleLogout = () => {
    localStorage.setItem('loginState', 'false');
    setIsLoggedIn(false);
    setShowUserPopover(false);
    router.push('/');
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-between align-items-center px-3 px-md-5 py-2 sticky-top"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000
      }}
    >
      <div className="d-flex align-items-center gap-2 flex-shrink-0">
        <div
          style={{
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            borderRadius: '50%',
            border: '2px solid #FF9900',
            boxShadow: '0 2px 8px rgba(255,153,0,0.08)',
            marginRight: 6,
          }}
        >
          <img
            src="https://images.scalebranding.com/elegant-b-letter-logo-e7491532-e662-48ce-ad79-29c55306d662.jpg"
            alt="Logo"
            style={{ width: 49, height: 49, borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <span
          className="fw-bold lh-1"
          style={{
            color: '#29999',
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 800,
            fontSize: '1.6rem',
            letterSpacing: '1px',
            lineHeight: 1.1,
            userSelect: 'none',
          }}
        >
          Sponso
          <span style={{ color: '#FF9900' }}>r</span>
          <span style={{ color: '#FF9900' }}>Zone</span>
        </span>
      </div>
      
      <div className="d-flex align-items-center gap-1 flex-nowrap ms-auto">
        <button 
          className="btn rounded-circle p-2 border-0" 
          title="Toggle Theme" 
          type="button" 
          style={{ 
            background: 'rgba(255,255,255,0.15)', 
            color: '#fff',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
          onClick={handleThemeToggle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          }}
        >
          <span role="img" aria-label="theme" style={{ fontSize: '1.1rem' }}>{darkMode ? '🌞' : '🌓'}</span>
          </button>
        
        <div style={{ position: 'relative' }}>
          <button 
            ref={notifBtnRef}
            className="btn rounded-circle p-2 border-0 position-relative" 
            title="Notifications" 
            type="button" 
            style={{ 
              background: 'rgba(255,255,255,0.15)', 
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onClick={() => setShowPopover((v) => !v)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
          >
            <span role="img" aria-label="notifications" style={{ fontSize: '1.1rem' }}>🔔</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ 
              background: 'linear-gradient(45deg, #ff6b6b, #feca57)', 
              color: '#fff', 
              fontSize: '0.7rem',
              border: '2px solid #fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>{notifications.length}</span>
          </button>
          {showPopover && (
            <div
              id="notif-popover"
              style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                minWidth: 260,
                background: 'rgba(255,255,255,0.98)',
                borderRadius: 12,
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                border: '1px solid rgba(102,126,234,0.15)',
                zIndex: 2000,
                padding: '0.5rem 0',
                backdropFilter: 'blur(10px)'
              }}
              className="shadow-lg mt-2"
            >
              <div className="px-3 py-2 border-bottom fw-bold text-primary" style={{ fontSize: '1rem' }}>Notifications</div>
              {notifications.length === 0 ? (
                <div className="px-3 py-3 text-muted text-center">No new notifications</div>
              ) : (
                notifications.map((notif) => (
                  <div key={notif.id} className="px-3 py-2 border-bottom text-dark" style={{ fontSize: '0.97rem', background: 'none' }}>
                    {notif.text}
                  </div>
                ))
              )}
              <div className="px-3 py-2 text-center">
                <span className="small text-muted">View all</span>
              </div>
            </div>
          )}
        </div>
        
        {isClient && (
          isLoggedIn ? (
            <div style={{ position: 'relative' }}>
              <button
                ref={userBtnRef}
                className="btn rounded-circle p-2 border-0"
                title="User Menu"
                type="button"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onClick={() => setShowUserPopover((v) => !v)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
              >
                <span role="img" aria-label="user" style={{ fontSize: '1.2rem' }}>👤</span>
              </button>
              {showUserPopover && (
                <div
                  id="user-popover"
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    minWidth: 180,
                    background: 'rgba(255,255,255,0.98)',
                    borderRadius: 12,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(102,126,234,0.15)',
                    zIndex: 2000,
                    padding: '0.5rem',
                    backdropFilter: 'blur(10px)'
                  }}
                  className="shadow-lg mt-2"
                >
                  <Link href="/admin" passHref legacyBehavior>
                    <a 
                      className="btn w-100 text-start mb-2" 
                      style={{ 
                        background: 'rgba(102,126,234,0.1)',
                        border: '1px solid rgba(102,126,234,0.2)',
                        color: '#667eea',
                        transition: 'all 0.3s ease',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(102,126,234,0.15)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(102,126,234,0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span role="img" aria-label="admin" className="me-2">⚙️</span>
                      Admin
                    </a>
                  </Link>
                  <Link href="/analytics" passHref legacyBehavior>
                    <a 
                      className="btn w-100 text-start mb-2" 
                      style={{ 
                        background: 'rgba(255, 206, 86, 0.12)',
                        border: '1px solid rgba(255, 206, 86, 0.2)',
                        color: '#e6a800',
                        transition: 'all 0.3s ease',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 206, 86, 0.18)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 206, 86, 0.12)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span role="img" aria-label="analytics" className="me-2">📊</span>
                      Analytics
                    </a>
                  </Link>
                  <Link href="/sponsor-management" passHref legacyBehavior>
                    <a 
                      className="btn w-100 text-start mb-2" 
                      style={{ 
                        background: 'rgba(102, 204, 153, 0.12)',
                        border: '1px solid rgba(102, 204, 153, 0.2)',
                        color: '#26a96c',
                        transition: 'all 0.3s ease',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 204, 153, 0.18)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(102, 204, 153, 0.12)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span role="img" aria-label="sponsor management" className="me-2">🤝</span>
                      Sponsor Management
                    </a>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn w-100 text-start"
                    style={{ 
                      background: 'rgba(255,107,107,0.1)',
                      border: '1px solid rgba(255,107,107,0.2)',
                      color: '#ff6b6b',
                      transition: 'all 0.3s ease',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.95rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,107,107,0.15)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,107,107,0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span role="img" aria-label="logout" className="me-2">🚪</span>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" passHref legacyBehavior>
                <a className="btn rounded-pill px-3 py-1 fw-semibold" style={{ 
                  background: 'rgba(255,255,255,0.15)', 
                  border: '1px solid rgba(255,255,255,0.3)', 
                  color: '#fff',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}
                >Login</a>
              </Link>
              
              <Link href="/registraton" passHref legacyBehavior>
                <a className="btn rounded-pill px-3 py-1 fw-semibold" style={{ 
                  background: 'linear-gradient(45deg, #ff6b6b, #feca57)', 
                  border: 'none', 
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(255,107,107,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,107,107,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,107,107,0.3)';
                }}
                >Register</a>
              </Link>
            </>
          )
        )}
        
        <Link href="/feedback" passHref legacyBehavior>
          <a className="btn rounded-pill px-3 py-1 fw-semibold" style={{ 
            background: 'rgba(255,255,255,0.15)', 
            border: '1px solid rgba(255,255,255,0.3)', 
            color: '#fff',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
          }}
          >Feedback</a>
        </Link>
      </div>
  </div>
  );
};

export default Header;
