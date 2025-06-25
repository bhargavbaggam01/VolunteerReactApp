'use client';
import { useRef } from 'react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';




export const LoginPage = () => {
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const router = useRouter();
const handleLogin = (e:any) => {
  e.preventDefault();
  if(email === "admin@gmail.com" && password === "qwerty") {
    console.log("working");
    localStorage.setItem('loginState', 'true');

    setEmail('');
    setPassword('');
    
    router.push('/');

  }
}
return(
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
    <div className="card shadow p-4" style={{ maxWidth: 380, width: '100%' }}>
      <div className="text-center mb-4">
        <span className="display-6 fw-bold text-primary">Login</span>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3 form-check d-flex align-items-center justify-content-between">
          <div>
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label ms-1" htmlFor="remember">Remember me</label>
          </div>
          <a href="#" className="small text-primary text-decoration-none">Forgot password?</a>
        </div>
        <button type="submit" onClick={handleLogin} className="btn btn-primary w-100 rounded-pill fw-semibold py-2 mt-2">Login</button>
      </form>
    </div>
  </div>
)
}


export default LoginPage;
