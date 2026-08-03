import type { QuartzComponent } from "@quartz-community/types"

export const Comments: QuartzComponent = ({ fileData }) => {
  return (
    <section class="comments">
      <h3>Comments</h3>
      <div>
        Comments loaded for {fileData.slug}
      </div>
    </section>
  )
}