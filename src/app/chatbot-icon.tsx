'use client';
import React, { useState, useRef, useEffect } from 'react';

const ChatbotIcon = () => {
  const [open, setOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Close chat if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Floating Chatbot Icon */}
      <button
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg"
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          width: 60,
          height: 60,
          zIndex: 1200,
          fontSize: 28,
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          border: 'none',
        }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Chatbot"
      >
        🤖
      </button>

      {/* Chatbox Popover */}
      {open && (
        <div
          ref={chatRef}
          className="card shadow-lg border-0"
          style={{
            position: 'fixed',
            bottom: 100,
            right: 32,
            width: 340,
            maxWidth: '95vw',
            zIndex: 1300,
            borderRadius: 18,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white rounded-top" style={{ borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
            <span className="fw-bold">Chatbot</span>
            <button
              className="btn btn-sm btn-light ms-2 px-2 py-0"
              style={{ borderRadius: 8, fontWeight: 700 }}
              onClick={() => setOpen(false)}
              aria-label="Close Chatbot"
            >
              ×
            </button>
          </div>
          <div className="card-body p-3" style={{ minHeight: 180, maxHeight: 260, overflowY: 'auto', background: 'rgba(245,247,250,0.95)' }}>
            <div className="mb-2 text-muted small">Hi! How can I help you today?</div>
            {/* Example static message */}
            <div className="mb-2 p-2 bg-primary text-white rounded-pill w-75 ms-auto text-end small">Show me the plans</div>
            <div className="mb-2 p-2 bg-light rounded-pill w-75 text-start small">Here are our subscription plans...</div>
          </div>
          <div className="card-footer bg-white border-0 p-2">
            <form className="d-flex align-items-center gap-2">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Type your message..."
                style={{ fontSize: 15 }}
                disabled
              />
              <button className="btn btn-primary rounded-pill px-3" type="button" disabled>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotIcon;

