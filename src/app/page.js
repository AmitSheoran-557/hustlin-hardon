import BreakingNews from "@/components/BreakingNews";
import Hero from "@/components/Hero";
import LatestTweets from "@/components/LatestTweets";
import Minting from "@/components/Minting";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Team />
    </>
  );
}
