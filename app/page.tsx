"use client";
import { RedirectToSignIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Job
            <span className="text-primary">tracking</span>app
          </h1>
          <p className="leading-loose max-w-100 mt-4">
            A job tracking app is designed to help users efficiently manage and
            monitor their job applications throughout the job search process.
            Users can log each job they apply for, capturing essential details
            such as the company name, position, application date, and job
            description. The app allows users to track the status of each
            application, which can be categorized into different stages like
            `Pending,` `Interview Scheduled,` or `Rejected.`
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
