"use client";

import Header from "@/components/layout/Header";
import ElementList from "./_components/ElementList";
import FormGenerator from "./_components/FormGenerator";

export default function Home() {
  return (
    <>
      <Header title="Google Form" />
      <main className="px-[15px] md:px-20 lg:px-[200px] xl:px-[400px] h-full w-full overflow-y-auto pt-10 ">
        <ElementList />
        <FormGenerator />
      </main>
    </>
  );
}
