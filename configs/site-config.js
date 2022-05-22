import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord
} from "react-icons/fa";
import {
  FcGoogle,
} from "react-icons/fc";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mwangilwa Zimba. All Rights Reserved.`,
  author: {
    name: "Mwangilwa Zimba",
    accounts: [
      {
        url: "https://github.com/mwan9ilwa",
        label: "Github",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/mwan9ilwa_",
        label: "Twitter",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://g.dev/mwan9ilwa",
        label: "Google Developers",
        type: "gray",
        icon: <FcGoogle />
      },
      {
        url: "https://linkedin.com/in/mwan9ilwa",
        label: "LinkedIn",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://discord.com/mwan9ilwa#9432",
        label: "Discord",
        type: "discord",
        icon: <FaDiscord />
      }
    ]
  }
};

export default siteConfig;