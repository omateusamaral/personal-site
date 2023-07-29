import { Trans, useTranslation } from "react-i18next";
import { ChronologyList } from "./ChronologyList";
import { useState } from "react";

export function TimeLineSection() {
  const [itemsLength, setItemsLength] = useState(5);
  const { t } = useTranslation();

  function handleAddMoreItems() {
    setItemsLength((prevState) => prevState + 5);
  }
  return (
    <section className="border-t-slate-400 border-b-slate-400 border-t-2 border-b-2  pt-2 pb-3 w-full bg-zinc-900">
      <h1 className="text-4xl text-white font-bold text-center mt-3">
        <Trans t={t}>Meus Projetos e minha evolução profissional</Trans>
      </h1>

      <div className="p-8 flex justify-center">
        <ChronologyList itemsLength={itemsLength} />
      </div>
      <div className="flex justify-center">
        <button
          className="text-white font-semibold hover:text-white py-2 px-4 border bg-transparent border-white hover:border-transparent rounded uppercase"
          onClick={handleAddMoreItems}
        >
          <Trans t={t}>Ver mais</Trans>
        </button>
      </div>
    </section>
  );
}
