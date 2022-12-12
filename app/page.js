import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, ContactUs, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <ContactUs />
    <Footer />
  </div>
);

export default Page;
