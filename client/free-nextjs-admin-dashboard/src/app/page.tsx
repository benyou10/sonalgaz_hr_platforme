import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LandingPage from "@/components/Dashboard/LandingPage";

export const metadata: Metadata = {
  title:
    "Sonalgaz HR platform",
  description: "This is a HR platform for Sonalgaz",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <LandingPage/>
      </DefaultLayout>
    </>
  );
}
