'use client';
import React from 'react';

export default function LegalTerms() {
  return (
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: 800 }}>
        <h1 className="fw-bold mb-4 text-center" style={{
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem',
        }}>
          Terms & Conditions
        </h1>
        <div className="bg-white rounded shadow-lg p-4 mb-4" style={{ backdropFilter: 'blur(10px)' }}>
          <h4 className="fw-semibold mb-3">1. Acceptance of Terms</h4>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mb-4" style={{ backdropFilter: 'blur(10px)' }}>
          <h4 className="fw-semibold mb-3">2. Use of the Site</h4>
          <p>
            You agree not to misuse the site or help anyone else do so. This includes, but is not limited to, attempting to access data you are not authorized to access, or interfering with the normal operation of the site.
          </p>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mb-4" style={{ backdropFilter: 'blur(10px)' }}>
          <h4 className="fw-semibold mb-3">3. Intellectual Property</h4>
          <p>
            All content, trademarks, and data on this site, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of or licensed to the site owner.
          </p>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mb-4" style={{ backdropFilter: 'blur(10px)' }}>
          <h4 className="fw-semibold mb-3">4. Limitation of Liability</h4>
          <p>
            The site owner shall not be responsible for and disclaims all liability for any loss, liability, damage (whether direct, indirect or consequential), personal injury or expense of any nature whatsoever which may be suffered by you or any third party.
          </p>
        </div>
        <div className="bg-white rounded shadow-lg p-4 mb-4" style={{ backdropFilter: 'blur(10px)' }}>
          <h4 className="fw-semibold mb-3">5. Changes to Terms</h4>
          <p>
            We reserve the right to change these terms at any time. It is your responsibility to check the terms regularly for changes.
          </p>
        </div>
        <div className="text-center text-muted mt-5">
          <small>Last updated: June 2024</small>
        </div>
      </div>
    </div>
  );
}
