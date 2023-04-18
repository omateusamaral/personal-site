import { Inter } from "next/font/google";
import { Footer } from "./Components/Footer";
import { IntroductionSection } from "./Components/IntroductionSection";
import Navbar from "./Components/Navbar";
import { TimeLineSection } from "./Components/TimeLineSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className="flex min-h-screen flex-col items-center justify-between"
        style={{
          background:
            "linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(27,27,50,1) 30%, rgba(13,13,14,1) 100%)",
        }}
      >
        <IntroductionSection />
        <TimeLineSection />
        <Footer />
      </main>
    </>
  );
}
