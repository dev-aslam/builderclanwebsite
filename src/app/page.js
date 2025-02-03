import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import HomeSection from "./components/Home";
import OpportunitySection from "./components/Opportunity";

export default function Home() {
  return (
    <div className="mt-[93px]">
      <HomeSection />
      <hr />
      <AboutSection />
      <hr />
      <OpportunitySection />
      <hr />
      <ContactSection />
    </div>
  );
}
