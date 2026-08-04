import type { QuartzComponent } from "@quartz-community/types"

export const Comments: QuartzComponent = ({ fileData }) => {
  return (
    <section className="comments">
      <h3>Comments</h3>
      <p>
        Comments loaded for {fileData.slug}
      </p>
    </section>
  )
}