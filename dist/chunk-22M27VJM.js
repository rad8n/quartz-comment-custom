// src/comments.tsx
import { jsx, jsxs } from "preact/jsx-runtime";
var Comments = (props) => {
  const slug = props?.fileData?.slug ?? "";
  return /* @__PURE__ */ jsxs("section", { class: "comments", children: [
    /* @__PURE__ */ jsx("h3", { children: "Comments" }),
    /* @__PURE__ */ jsxs("div", { children: [
      "Comments loaded for ",
      slug
    ] })
  ] });
};

export {
  Comments
};
//# sourceMappingURL=chunk-22M27VJM.js.map