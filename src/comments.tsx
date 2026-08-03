import type { QuartzComponent } from "@quartz-community/types"

export const Comments: QuartzComponent = ({ fileData }) => {
  const slug = fileData.slug

  return (
    <section class="comments">
      <h3>Comments</h3>

      <div
        id="comments"
        data-slug={slug}
      >
        Loading comments...
      </div>
    </section>
  )
}

Comments.css = `
.comments {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--lightgray);
}

.comments h3 {
  margin-bottom: 0.5rem;
}
`