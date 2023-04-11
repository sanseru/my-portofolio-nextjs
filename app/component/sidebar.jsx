import Image from "next/image";
import React from "react";

import { Envelope, Twitter, Linkedin, Medium } from "./icons";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around w-full sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full h-full m-6"
          src="/images/haris_sharp.webp"
          alt="haris_sharp.webp"
          aria-label="haris_sharp.webp"
        />
        <h1 className="mb-2 text-center">{name}</h1>
        <h2 className="mb-2">{role}</h2>
        <p className="mb-2 text-center">{education[0]}</p>
        <p className="mb-2 text-center">{education[1]}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="mb-2">CONTACT ME</h3>
          <div className="flex flex-row justify-center gap-6">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"twitter link"}
            >
              <Twitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"linkedin link"}
            >
              <Linkedin />
            </a>
            {/* <a className="icons-contactme" href={contactLinks?.[3]} aria-label={"medium link"}>
                            <Medium />
                        </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
