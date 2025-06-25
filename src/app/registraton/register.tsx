'use client';
import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: 420 }}>
        <div className="text-center mb-4">
          <span className="display-6 fw-bold text-success">Register</span>
        </div>
        {submitted ? (
          <div className="alert alert-success text-center">Thank you for registering!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required autoFocus />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" id="location" name="location" value={form.location} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea className="form-control" id="comment" name="comment" rows={3} value={form.comment} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-pill fw-semibold py-2 mt-2">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
