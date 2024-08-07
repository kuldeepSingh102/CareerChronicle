import Image from "next/image";
import { Camera } from "lucide-react";
import Logo from "../assets/logo.svg";
import LandingImg from "../assets/main.svg";
import Link from "next/link";
import { Button } from "../components/ui/button";
export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="Logo"></Image>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Job
            <span className="text-primary">tracking
            </span>app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            enim reiciendis quos perferendis, molestias soluta! Id quas expedita
            tempore? Sint, molestiae aperiam? Delectus culpa nihil dolor tempore
            tenetur eos magnam?
          </p>
          <Button asChild className="mt-4 max-w-3">
            <Link href="/add-job"></Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block"></Image>
      </section>
    </main>
  );
}
