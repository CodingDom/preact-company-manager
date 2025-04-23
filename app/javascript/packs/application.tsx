// Entry point for the build script in your package.json

/** @jsx h */
import { h, render } from "preact";
import { loadPage } from "../utils/loadPage";

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("preact-root");
  if (!root) return;

  const pageName = root.dataset.component!;
  const props = JSON.parse(root.dataset.props || "{}");

  const Page = await loadPage(pageName);

  if (Page) {
    render(<Page {...props} />, root);
  }
});
