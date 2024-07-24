import React from "react";
import { createRoot } from "react-dom/client";

import Layout from "host_app/Layout";

const container = document.getElementById("app");

const root = createRoot(container);
root.render(<Layout />);
