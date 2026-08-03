// src/comments.tsx
import { jsx, jsxs } from "preact/jsx-runtime";
var Comments = ({ fileData }) => {
  return /* @__PURE__ */ jsxs("section", { class: "comments", children: [
    /* @__PURE__ */ jsx("h3", { children: "Comments" }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Comments loaded for ",
      fileData.slug
    ] })
  ] });
};

export {
  Comments
};
//# sourceMappingURL=chunk-M43LVAEF.js.map