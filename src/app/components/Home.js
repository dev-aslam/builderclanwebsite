import Button from "./Button";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      className="min-h-[calc(100vh-93px)] flex items-center pt-10 pb-5"
      id="home">
      <div className="container h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-4 h-full pb-24">
          <div className="col-span-12 lg:col-span-7 lg:mb-0 mb-10">
            <div className="flex flex-col justify-center h-full px-2">
              <div className="hero-catchphrase slider-custom-anim-left mb-4">
                {`✨ Together, let's build something extraordinary! ✨`}
              </div>
              <div className="mb-3">
                <h1 className="hero-heading">
                  Welcome to BuilderClan
                  <br className="md:hidden" /> The Tech Community where
                  <br />
                  <span>Innovation meets Collaboration!</span>
                </h1>
              </div>
              <div className="hero-sub-text mb-10">
                {`At Builder Clan, we believe in building solutions that matter. Whether you're a coder, a designer, or a tech enthusiast, you're part of a community that fosters creativity, learning, and growth.`}
              </div>
              <div className="header-cta">
                <Button content="Get Started" active />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="flex flex-col justify-center items-center h-full px-2">
              <div className="hero-image">
                <Image src={`/Logo.png`} alt="logo" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
