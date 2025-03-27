import FAQ from "@/components/Faqs";
import Hero from "@/components/Hero";
import LatestTweets from "@/components/LatestTweets";
import Minting from "@/components/Minting";
import Team from "@/components/Team";
import Roadmap from "@/components/Roadmap";
import BreakingNews from "@/components/BreakingNews";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap/>
      <Team />
      <FAQ/>
      <Footer/>
      <BackToTop/>
    </>
  );
}
