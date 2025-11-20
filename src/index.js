import React from "react";
import { createRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from "./App";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />, <SpeedInsights/>);