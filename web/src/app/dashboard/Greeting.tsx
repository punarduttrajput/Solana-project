import React from 'react';

interface GreetingProps {
  description: string;
  imageUrl: string;
}

const Greeting: React.FC<GreetingProps> = ({ description, imageUrl }) => {
  return (
    <div className="flex greetings">
      <div className="container w-full flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">Welcome to CoinClock</h1>
          <p className="text-xl mb-4">{description}</p>
        </div>
        <div className="flex-1 md:ml-8">
          <img src={imageUrl} alt="Application Image"  />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
