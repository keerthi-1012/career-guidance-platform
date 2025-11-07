import './App.css';
import { useState } from 'react';

export default function Login({ onLogin }) {
  const [loginType, setLoginType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, type: loginType }),
      });
      const result = await response.json();
      if (result.success) {
        onLogin(result.user); // Pass user info to dashboard
      } else {
        setError(result.message);
      }
    } catch {
      setError('Server error. Is backend running?');
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Welcome to CareerGuide</h1>
        <nav>
          <span className="login">Login</span>
          <span className="get-started">Get Started</span>
        </nav>
      </header>
      <main>
        <div className="login-panel">
          <h2>Sign in to access your personalized career guidance</h2>
          <div className="tabs">
            <button className={loginType==='student'?'active':''} onClick={()=>setLoginType('student')}>Student</button>
            <button className={loginType==='admin'?'active':''} onClick={()=>setLoginType('admin')}>Admin</button>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Sign In as {loginType.charAt(0).toUpperCase()+loginType.slice(1)}</button>
          </form>
          {error && <div className="error">{error}</div>}
          <div className="demo-note">Demo: Use any email and password</div>
        </div>
      </main>
    </div>
  );
}
