import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-gray-800 text-white">
      <div className="flex justify-center items-center">
        <p className="mr-2">© {currentYear} CoinClock. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;