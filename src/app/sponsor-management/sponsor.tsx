'use client';
import React, { useState } from 'react';

interface Sponsor {
  id: number;
  name: string;
  email: string;
  isIndividual: boolean;
  event: string;
  isActive: boolean;
  isNew?: boolean;
}

const initialSponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    isIndividual: true,
    event: 'Art Expo 2024',
    isActive: true,
    isNew: false,
  },
  {
    id: 2,
    name: 'TechCorp Ltd.',
    email: 'contact@techcorp.com',
    isIndividual: false,
    event: 'Tech Summit',
    isActive: false,
    isNew: false,
  },
];

const SponsorManagement = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>(initialSponsors);

  const handleToggle = (id: number, field: 'isIndividual' | 'isActive') => {
    setSponsors((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, [field]: !s[field] } : s
      )
    );
  };

  const handleInputChange = (id: number, field: keyof Sponsor, value: string) => {
    setSponsors((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  };

  const handleAdd = () => {
    setSponsors((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: '',
        email: '',
        isIndividual: false,
        event: '',
        isActive: true,
        isNew: true,
      },
    ]);
  };

  const handleSubmit = (id: number) => {
    setSponsors((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, isNew: false } : s
      )
    );
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Sponsor Management</h2>
        <button className="btn btn-success rounded-pill px-4 fw-semibold" onClick={handleAdd}>
          + Add
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle shadow rounded bg-white">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Is Individual</th>
              <th>Event/Exhibition Sponsored</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map((sponsor) => (
              <tr key={sponsor.id}>
                <td>
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    value={sponsor.name}
                    placeholder="Name"
                    onChange={(e) => handleInputChange(sponsor.id, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control border-0 bg-transparent"
                    value={sponsor.email}
                    placeholder="Email"
                    onChange={(e) => handleInputChange(sponsor.id, 'email', e.target.value)}
                  />
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={sponsor.isIndividual}
                      onChange={() => handleToggle(sponsor.id, 'isIndividual')}
                      id={`individual-switch-${sponsor.id}`}
                    />
                    <label className="form-check-label" htmlFor={`individual-switch-${sponsor.id}`}>
                      {sponsor.isIndividual ? 'Yes' : 'No'}
                    </label>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    value={sponsor.event}
                    placeholder="Event/Exhibition"
                    onChange={(e) => handleInputChange(sponsor.id, 'event', e.target.value)}
                  />
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={sponsor.isActive}
                      onChange={() => handleToggle(sponsor.id, 'isActive')}
                      id={`active-switch-${sponsor.id}`}
                    />
                    <span className={`badge ms-2 ${sponsor.isActive ? 'bg-success' : 'bg-secondary'}`}>{sponsor.isActive ? 'Active' : 'Inactive'}</span>
                  </div>
                </td>
                <td>
                  {sponsor.isNew && (
                    <button className="btn btn-primary btn-sm rounded-pill px-3 fw-semibold" onClick={() => handleSubmit(sponsor.id)}>
                      Submit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SponsorManagement;
