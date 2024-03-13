import React from 'react';

interface ContactProps {
  email: string;
  phone: string;
  discord: string;
  twitter: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, discord, twitter }) => {
  return (
    <div className="mt-5 mb-3">
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center mb-4">
            <div className="font-semibold text-xl mr-2">Email:</div>
            <span>{email}</span>
          </div>
          <div className="flex items-center">
            <div className="font-semibold text-xl mr-2">Phone:</div>
            <span>{phone}</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <div className="flex items-center mb-4">
            <img className="social-img" src={discord} alt="discord" />
            <a href="#" className="ml-2">
              discord/coinclick
            </a>
          </div>
          <div className="flex items-center">
            <img className="social-img" src={twitter} alt="twitter" />
            <a href="#" className="ml-2">
              x.com/coinclick
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
