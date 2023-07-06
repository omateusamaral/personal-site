import { getAnalytics, logEvent } from "firebase/analytics";
import { AiOutlineArrowRight } from "react-icons/ai";
import { app } from "../firebase.config";
import { Trans, useTranslation } from "react-i18next";

export interface ChronologyItemProps {
  title: string;
  date: string;
  description: string;
  link?: string;
}
export function ChronologyItem({
  title,
  date,
  link,
  description,
}: ChronologyItemProps) {
  const { t } = useTranslation();

  function handleClickLearnMore(link: string, title: string) {
    if (typeof window !== "undefined") {
      logEvent(getAnalytics(app), "view_item_list", {
        item_list_id: link,
        item_list_name: title,
      });
    }
  }
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-xl font-semibold text-white dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-md font-normal text-gray-500 dark:text-gray-400 max-w-xl">
        {description}
      </p>
      {!!link && (
        <a
          href={link}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          target="_blank"
          rel="noreferrer"
          onClick={() => handleClickLearnMore(link, title)}
        >
          <Trans t={t}>Saiba mais</Trans>
          <AiOutlineArrowRight className="ml-2" size={14} />
        </a>
      )}
    </li>
  );
}
