'use client';
import React from 'react';

const mockStatus = [
  {
    id: 1,
    type: 'Event Registration',
    date: '2024-06-01',
    status: 'Approved',
    comment: 'Welcome to the event!'
  },
  {
    id: 2,
    type: 'New User Registration',
    date: '2024-06-02',
    status: 'Pending',
    comment: 'Awaiting admin review.'
  },
  {
    id: 3,
    type: 'Event Registration',
    date: '2024-06-03',
    status: 'Rejected',
    comment: 'Incomplete information.'
  },
];

export default function ApprovalStatus() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center" style={{
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
      }}>
        My Approval Request Status (Last 30 Days)
      </h2>
      <div className="table-responsive rounded shadow-lg" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
        <table className="table align-middle mb-0">
          <thead style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff' }}>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            {mockStatus.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center text-muted py-5">No requests in the last 30 days.</td>
              </tr>
            ) : (
              mockStatus.map((req) => (
                <tr key={req.id}>
                  <td>{req.type}</td>
                  <td>{req.date}</td>
                  <td>
                    <span className={`badge px-3 py-2 rounded-pill fw-semibold ${
                      req.status === 'Approved' ? 'bg-success' : req.status === 'Rejected' ? 'bg-danger' : 'bg-warning text-dark'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td>{req.comment}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
