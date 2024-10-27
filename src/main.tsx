import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ComWeapon from "./components/ComWeapon.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ComWeapon weapon={{type: "ranged", techLevel: "advanced"}} />
  </StrictMode>
);

{/* <App /> */}