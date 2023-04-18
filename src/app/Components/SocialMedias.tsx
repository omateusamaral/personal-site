import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialMediaLink } from "./SocialMediaLink";

export function SocialMedias() {
  return (
    <ul className="flex flex-row flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white">
      <li>
        <SocialMediaLink
          redirectTo="https://www.linkedin.com/in/mateus-passos-amaral/"
          icon={<AiFillLinkedin color="white" size={40} />}
        />
      </li>

      <li>
        <SocialMediaLink
          redirectTo="https://github.com/omateusamaral"
          icon={<AiFillGithub color="white" size={40} />}
        />
      </li>
    </ul>
  );
}
