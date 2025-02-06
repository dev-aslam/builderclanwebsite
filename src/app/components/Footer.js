import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo mb-10">
        <Image src={`/LogoShort.png`} alt="logo" width={30} height={24} />
        <span>BuilderClan</span>
      </div>
      <div className="menu-items pb-10">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#opportunity">Opportunity</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div className="py-10 contact flex flex-col gap-4 sm:flex-row justify-center items-center">
        <div>
          <Image src={`/Email.svg`} alt="location" width={20} height={20} />
          <span>main.builderclan@gmail.com</span>
        </div>
        <div>
          <Image src={`/Location.svg`} alt="location" width={20} height={20} />
          <span>Somewhere in the world</span>
        </div>
      </div>
      <div className="socials mt-10 justify-center md:justify-between">
        <div className="flex gap-2">
          <button className={`px-6 py-3 text-white social-icon`}>
            <Image
              src={`/Facebook.svg`}
              alt="facebook"
              width={20}
              height={20}
            />
          </button>
          <button className={`px-6 py-3 text-white social-icon`}>
            <Image src={`/GitHub.svg`} alt="github" width={20} height={20} />
          </button>
          <button className={`px-6 py-3 text-white social-icon`}>
            <Image
              src={`/LinkedIn.svg`}
              alt="linkedin"
              width={20}
              height={20}
            />
          </button>
        </div>
        <p className="hidden lg:block">BuildClan All Rights Reserved</p>
        <p className="hidden md:block">Privacy Policy | Terms of Service</p>
      </div>
      <div className="md:hidden flex justify-between max-w-[280px] mt-5 mx-auto footer-text">
        <span>Privacy Policy</span> | <span>Terms of Service</span>
      </div>
      <div className="lg:hidden mt-10 text-center mb-16 footer-text">
        BuildClan All Rights Reserved
      </div>
    </footer>
  );
}
