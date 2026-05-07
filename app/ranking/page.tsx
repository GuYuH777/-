import { Suspense } from "react";
import { RankingExperience } from "@/components/ranking-experience";

export default function RankingPage() {
  return (
    <Suspense fallback={null}>
      <RankingExperience />
    </Suspense>
  );
}
