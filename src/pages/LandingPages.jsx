import MessageForm from "../components/Contact";
import HeroSection from "../components/Hero";
import Keseruan from "../components/Keseruan";
import MomentSection from "../components/Moment";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/Profil";

const LandingPages = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Keseruan />
      <MomentSection />
      <ProfileSection />
      <MessageForm />
    </>
  );
};

export default LandingPages;
