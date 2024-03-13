import { AppHero } from '../ui/ui-layout';
import Section from './Section';
import Contact from './Contact';
import Greeting from './Greeting';
const links: { label: string; href: string }[] = [
  { label: 'Solana Docs', href: 'https://docs.solana.com/' },
  { label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
  { label: 'Solana Cookbook', href: 'https://solanacookbook.com/' },
  { label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
  {
    label: 'Solana Developers GitHub',
    href: 'https://github.com/solana-developers/',
  },
];

export default function DashboardFeature() {
  return (
    < >
      {/* <div>
        <AppHero title="Welcome to CoinClock!" subtitle=" This is your decentralized solution for hassle-free attendance tracking. 
        Say goodbye to outdated methods and manual record-keeping. With CoinClock, marking your attendance is as simple as a click of a button." />
      </div> */}
      <Greeting 
      description = "This is your decentralized solution for hassle-free attendance tracking. Say goodbye to outdated methods and manual record-keeping. With CoinClock, marking your attendance is as simple as a click of a button."
      imageUrl ="/assets/coinclock-img.png"
      />
      <p className="text-4xl text-center mt-2 mb-2 fw-600">Our Features</p>
      <div className="container mx-auto">
        <Section
        title="Effortless Attendance Tracking"
        description="Mark your attendance with ease using your Solana wallet. Say goodbye to traditional paper-based registers or complicated systems. 
        CoinClock simplifies the attendance tracking process, allowing you to focus on your work."
        imageSrc="/assets/effortless-bg.png"
        imagePosition="left" // Optional, defaults to 'left'
        />

        <Section
        title="Transparent and Secure"
        description="Rest assured that your attendance data is securely stored on the blockchain, ensuring transparency and integrity. 
        With CoinClock, you can trust that your attendance records are tamper-proof and immutable, providing a reliable audit trail."
        imageSrc="/assets/secure-bg.png"
        imagePosition="right" // Optional, defaults to 'left'
        />

        <Section
        title="Accessible Anytime, Anywhere"
        description="Whether you're in the office, working remotely, or traveling, CoinClock is accessible wherever you are. 
        Simply connect your Solana wallet and start tracking your attendance. 
        Enjoy the flexibility of accessing CoinClock anytime, anywhere, and stay on top of your attendance effortlessly."
        imageSrc="/assets/anywhere-bg.png"
        imagePosition="left" // Optional, defaults to 'left'
        />
      </div>
      <Contact 
      email="support@coinclock.com"
      phone="+1 444 444 4444"
      discord ="/assets/dis.png"
      twitter = "/assets/x.png"
      />
    </>
  );
}
