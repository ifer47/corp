import type { Metadata } from "next";
import homeSrc from "@/public/home.jpg";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Home | Cloud Hosting",
  description: "Professional Cloud Hosting services",
};
export default function HomePage() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Home" content="Professional Cloud Hosting" />
  );
}
