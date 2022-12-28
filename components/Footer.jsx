import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Everson F. Machado All rights reserverd ©</p>
      <div className="icons">
        <p className="icon-hover">
          <Link href="https://instagram.com" target="_blank">
            <AiFillInstagram />
          </Link>
        </p>
        <p className="icon-hover">
          <Link href="https://twitter.com" target="_blank">
            <AiOutlineTwitter />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
