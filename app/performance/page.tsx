import type { Metadata } from "next";
import Hero from "@/components/hero";
import performanceSrc from "@/public/performance.jpg";

export const metadata: Metadata = {
  title: "Performance | Cloud Hosting",
  description: "High performance cloud hosting solutions",
};
export default function PerformancePage() {
  return <Hero imgUrl={performanceSrc} altTxt="Performance" content="Performance~~~" />
}
