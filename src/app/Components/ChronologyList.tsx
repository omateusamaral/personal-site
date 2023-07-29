import { useTranslation } from "react-i18next";
import { chronologies, chronologiesPT } from "../constants";
import { ChronologyItem } from "./ChronologyItem";
import { useMemo } from "react";

interface ChronologyListProps {
  itemsLength: number;
}
export function ChronologyList({ itemsLength }: ChronologyListProps) {
  const { i18n } = useTranslation();

  const currentChronologies =
    i18n.language === "pt" ? chronologiesPT : chronologies;

  const ChronologyListMemoized = useMemo(
    () => (
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {currentChronologies.slice(0, itemsLength).map((chronology) => (
          <ChronologyItem
            key={chronology.date}
            date={chronology.date}
            description={chronology.description}
            title={chronology.title}
            link={chronology.link}
          />
        ))}
      </ol>
    ),
    [currentChronologies, itemsLength]
  );
  return <>{ChronologyListMemoized}</>;
}
