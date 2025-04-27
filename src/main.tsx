import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { TForce } from "./types/types.ts";
import ComForceMain from "./components/ComForceMain.tsx";

const myForce: TForce = {forceID: "91204", forceName: "tester", characters: []}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <ComForceMain forceInit={myForce} />
    </div>
  </StrictMode>
);
