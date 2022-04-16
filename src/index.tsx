/*
import { render } from "react-dom";
import { Wrapper } from "./App";

render(<Wrapper />, document.getElementById("root"));
*/

import { createRoot } from "react-dom/client";
import { Wrapper } from "./App";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(<Wrapper />);
