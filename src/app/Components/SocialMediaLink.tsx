import { ReactNode } from "react";

interface SocialMediaLinkProps {
  redirectTo: string;
  icon: ReactNode;
}
export function SocialMediaLink({ redirectTo, icon }: SocialMediaLinkProps) {
  return (
    <div className="d-flex flex-row">
      <a href={redirectTo} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
}
