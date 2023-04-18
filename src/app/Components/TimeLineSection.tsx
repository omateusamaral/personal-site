import { ChronologyList } from "./ChronologyList";

export function TimeLineSection() {
  return (
    <section className="border-t-slate-400 border-t-2 w-full">
      <h1 className="text-4xl text-white font-bold text-center mt-3">
        TimeLine
      </h1>

      <div className="p-8 flex justify-center">
        <ChronologyList />
      </div>
      <div className="flex justify-center">
        <button className="text-white font-semibold hover:text-white py-2 px-4 border bg-transparent border-white hover:border-transparent rounded uppercase">
          Load more
        </button>
      </div>
    </section>
  );
}
