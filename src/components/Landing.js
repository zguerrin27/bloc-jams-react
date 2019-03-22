import React from 'react';
// import applause from './assets/images/applause.jpg';

const Landing = () => (
  
    <section className="landing">
        {/* <img className="p2-pic" src={applause} alt="applause pic"/> */}
        <h1 className="hero-title">Turn the music up!</h1>
    
    <section className="selling-points">

      <div className="point-1">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>

      <div className="point-2">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>

      <div className="point-3">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>

    </section>

    </section>
);

export default Landing;