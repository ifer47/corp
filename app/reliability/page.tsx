import type { Metadata } from "next";
import Hero from "@/components/hero";
import reliabilitySrc from "@/public/reliability.jpg";

export const metadata: Metadata = {
  title: "Reliability | Cloud Hosting",
  description: "Reliable cloud hosting with high availability",
};
export default function ReliabilityPage() {
  return <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="Reliability~~~" />
}
