import React from "react";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";
import Sidebar from "@/components/Sidebar";

function layout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5">
      {/*first colummn to hide the sccreen */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
}

export default layout;
