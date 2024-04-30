import React from "react";
import { Button } from "../ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flexcenter  max-w-4xl w-full p-16 mx-auto">
      <div className="flexcenter max-sm:flex-col gap-2">
        <Button
          variant={"ghost"}
          className="flexcenter gap-2 rounded-xl font-title font-bold "
        >
          <span>Linkedin</span>
          <LinkedinIcon width={14} height={14} />
        </Button>
        <Button
          variant={"ghost"}
          className="flexcenter gap-2 rounded-xl font-title font-bold "
        >
          <span>Twitter</span>
          <TwitterIcon width={14} height={14} />
        </Button>
        <Button
          variant={"ghost"}
          className="flexcenter gap-2 rounded-xl font-title font-bold "
        >
          <span>Github</span>
          <GithubIcon width={14} height={14} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
