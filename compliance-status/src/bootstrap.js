import React from "react";
import { createRoot } from "react-dom/client";

import App from "host_app/App";

const container = document.getElementById("app");

const root = createRoot(container);
root.render(<App />);
