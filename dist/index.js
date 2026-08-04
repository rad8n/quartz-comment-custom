// src/comments.tsx
import { jsx, jsxs } from "preact/jsx-runtime";
var Comments = ({ fileData }) => {
  return /* @__PURE__ */ jsxs("section", { className: "comments", children: [
    /* @__PURE__ */ jsx("h3", { children: "Comments" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Comments loaded for ",
      fileData.slug
    ] })
  ] });
};
export {
  Comments
};
