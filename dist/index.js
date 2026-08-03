// src/comments.tsx
import { jsx, jsxs } from "preact/jsx-runtime";
var Comments = ({ fileData }) => {
  const slug = fileData.slug;
  return /* @__PURE__ */ jsxs("section", { class: "comments", children: [
    /* @__PURE__ */ jsx("h3", { children: "Comments" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "comments",
        "data-slug": slug,
        children: "Loading comments..."
      }
    )
  ] });
};
Comments.css = `
.comments {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--lightgray);
}

.comments h3 {
  margin-bottom: 0.5rem;
}
`;
export {
  Comments
};
//# sourceMappingURL=index.js.map