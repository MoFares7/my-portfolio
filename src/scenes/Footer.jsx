import LineGradient from "../components/LineGradient";
import SocialMediaIcons from "../components/SocialMediaIcons";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import git from "../assets/git.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-64 bg-deep-blue pt-10">
      <LineGradient />
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Mohamad Fares AlDabbas
          </p>
          <div className="block">
            <div className="flex">
              <img src={email} width="20px" className="" />
              <p className="font-playfair text-md text-yellow pl-3">
                faresdabbas1@gmail.com
              </p>
            </div>
            <div className="flex">
              <img src={phone} width="20px" className="" />
              <p className="font-playfair text-md text-yellow pr-2 pl-3">
                +963943632624
              </p>
              <p className="font-playfair text-md text-yellow ">
                +963982509861
              </p>
            </div>
            <div className="flex">
              <img src={git} width="20px" className="" />
              <p className="font-playfair text-md text-yellow pl-3 ">
                <a href="https://github.com/MoFares7" target="_blank" rel="noopener noreferrer">
                  MoFares7
                </a>
              </p>


            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
