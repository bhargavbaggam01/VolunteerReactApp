'use client';
import React, { useState } from 'react';

const mockRequests = [
  {
    id: 1,
    type: 'Event Registration',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    date: '2024-06-01',
  },
  {
    id: 2,
    type: 'New User Registration',
    name: 'Bob Smith',
    email: 'bob@example.com',
    date: '2024-06-02',
  },
  {
    id: 3,
    type: 'Event Registration',
    name: 'Charlie Lee',
    email: 'charlie@example.com',
    date: '2024-06-03',
  },
];

export default function ApprovalRequest() {
  const [requests, setRequests] = useState(mockRequests);

  const handleAction = (id: number, action: 'approve' | 'reject') => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center" style={{
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
      }}>
        Approval Notifications
      </h2>
      <div className="table-responsive rounded shadow-lg" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
        <table className="table align-middle mb-0">
          <thead style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff' }}>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-muted py-5">No approval requests.</td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.type}</td>
                  <td>{req.name}</td>
                  <td>{req.email}</td>
                  <td>{req.date}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-success btn-sm rounded-pill px-3 me-2 fw-semibold"
                      onClick={() => handleAction(req.id, 'approve')}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger btn-sm rounded-pill px-3 fw-semibold"
                      onClick={() => handleAction(req.id, 'reject')}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
