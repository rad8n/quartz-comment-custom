import type { QuartzComponent } from "@quartz-community/types"

export const Comments: QuartzComponent = (props) => {
  const slug = props?.fileData?.slug ?? ""

  return (
    <section className="comments">
      <h3>Comments</h3>
      <div>
        Comments loaded for {slug}
      </div>
    </section>
  )
}