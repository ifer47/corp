import type { Metadata } from "next";
import Hero from "@/components/hero";
import scaleSrc from "@/public/scale.jpg";

export const metadata: Metadata = {
  title: "Scale | Cloud Hosting",
  description: "Scalable cloud hosting infrastructure",
};
export default function ScalePage() {
  return <Hero imgUrl={scaleSrc} altTxt="Scale" content="Scale~~~" />;
}
