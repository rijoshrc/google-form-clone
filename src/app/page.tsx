"use client";

import FormGenerator from "./_components/FormGenerator";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ElementList from "./_components/ElementList";

export default function Home() {
  return (
    <main className="px-[400px] h-full w-full overflow-y-auto pt-10 ">
      <DndProvider backend={HTML5Backend}>
        <ElementList />
        <FormGenerator />
      </DndProvider>
    </main>
  );
}
