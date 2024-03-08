import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LandingPage from "@/components/Dashboard/LandingPage";

export const metadata: Metadata = {
  title: "sonalgaz SignIn Page ",
  description: "This is Next.js Signin Page sonalgaz hr Dashboard Template",
};

const SignIn: React.FC = () => {
  return (
    <DefaultLayout>
      

      <LandingPage/>
    </DefaultLayout>
  );
};

export default SignIn;
