import React, { useEffect } from 'react';
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("usertype");
    if (userType === 'freelancer') {
      navigate("/freelancer");
    } else if (userType === 'client') {
      navigate("/client");
    } else if (userType === 'admin') {
      navigate("/admin");
    }
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className='landing-nav'>
          <h3>SB Works</h3>
          <button className="nav-button" onClick={() => navigate('/authenticate')}>Sign In</button>
        </div>

        <div className="landing-hero-text">
          <h1>"Unleash Your Potential: Thrive with SB Works"</h1>
          <p>
          "Step into Infinite Opportunities with SB Works! Ignite your creativity, showcase your skills, and fuel your passion on a platform where innovation meets demand. Whether you're a freelancer or a business seeking top talent, SB Works is where excellence finds its match."
          </p>
          <button className="join-button" onClick={() => navigate('/authenticate')}>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
