import React from "react";
import { createRoot } from "react-dom/client";
import 'semantic-ui-less/semantic.less'
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);