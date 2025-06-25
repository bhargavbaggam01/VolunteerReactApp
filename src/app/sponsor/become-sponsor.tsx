'use client';
import React, { useState } from 'react';

const successStories = [
  {
    name: 'Acme Corp',
    type: 'Company',
    story: 'Acme Corp saw a 200% increase in brand visibility after sponsoring our event.'
  },
  {
    name: 'Jane Doe',
    type: 'Individual',
    story: 'Jane connected with industry leaders and grew her network as a sponsor.'
  },
  {
    name: 'Beta Innovations',
    type: 'Company',
    story: 'Beta Innovations launched a new product and gained valuable leads.'
  },
];

const events = [
  'Tech Summit 2024',
  'Innovation Expo',
  'Startup Connect',
];

const exhibitions = [
  'AI Pavilion',
  'Green Energy Showcase',
  'HealthTech Gallery',
];

export const BecomeSponsor = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedExhibition, setSelectedExhibition] = useState('');
  const [interestMsg, setInterestMsg] = useState('');

  const handleShowInterest = (e: React.FormEvent) => {
    e.preventDefault();
    setInterestMsg(
      `Thank you for showing interest in sponsoring ${selectedEvent || 'an event'} and ${selectedExhibition || 'an exhibition'}!`
    );
  };

  return (
    <div className="container py-5">
      {/* Section 1: Featured Success Stories */}
      <div className="mb-5">
        <h2 className="fw-bold text-center mb-4">Featured Success Stories</h2>
        <div className="row g-4 justify-content-center">
          {successStories.map((story, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-2 text-primary">{story.name} <span className="badge bg-secondary ms-2">{story.type}</span></h5>
                  <p className="card-text text-muted">{story.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Sponsor Existing Events */}
      <div className="mb-5">
        <h2 className="fw-bold text-center mb-4">Sponsor Our Existing Events</h2>
        <form className="mx-auto" style={{ maxWidth: 500 }} onSubmit={handleShowInterest}>
          <div className="mb-3">
            <label htmlFor="eventSelect" className="form-label">Select Event</label>
            <select
              id="eventSelect"
              className="form-select"
              value={selectedEvent}
              onChange={e => setSelectedEvent(e.target.value)}
              required
            >
              <option value="">Choose an event...</option>
              {events.map((event, idx) => (
                <option key={idx} value={event}>{event}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exhibitionSelect" className="form-label">Select Exhibition</label>
            <select
              id="exhibitionSelect"
              className="form-select"
              value={selectedExhibition}
              onChange={e => setSelectedExhibition(e.target.value)}
              required
            >
              <option value="">Choose an exhibition...</option>
              {exhibitions.map((exh, idx) => (
                <option key={idx} value={exh}>{exh}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill fw-semibold">Show Interest</button>
        </form>
        {interestMsg && (
          <div className="alert alert-success mt-4 text-center" role="alert">
            {interestMsg}
          </div>
        )}
      </div>
    </div>
  );
};
