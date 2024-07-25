import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-transparent px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
      <div className="flex w-full flex-col items-center justify-between gap-6 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-sm text-foreground sm:text-base">
          ©2024 Ayush Katre
        </span>
        <div className="flex gap-6">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-5 w-5"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            className="h-5 w-5"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-5 w-5"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
