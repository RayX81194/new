'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState({
    hr: new Date().getHours(),
    min: new Date().getMinutes(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hr: now.getHours(),
        min: now.getMinutes(),
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <p>
          {time.hr.toString().padStart(2, '0')} : {time.min.toString().padStart(2, '0')}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
