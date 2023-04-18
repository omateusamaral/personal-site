import { chronologies } from "../constants";
import { ChronologyItem } from "./ChronologyItem";

export function ChronologyList() {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {chronologies.map((chronology) => (
        <ChronologyItem
          key={chronology.date}
          date={chronology.date}
          description={chronology.description}
          title={chronology.title}
          link={chronology.link}
        />
      ))}
    </ol>
  );
}
