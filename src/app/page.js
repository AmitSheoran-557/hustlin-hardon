import FAQ from "@/components/Faqs";
import Hero from "@/components/Hero";
import LatestTweets from "@/components/LatestTweets";
import Minting from "@/components/Minting";
import Team from "@/components/Team";
import Roadmap from "@/components/Roadmap";
import BreakingNews from "@/components/BreakingNews";

export default function Home() {
  return (
    <>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Team />
      <Roadmap/>
      <FAQ/>
    </>
  );
}
