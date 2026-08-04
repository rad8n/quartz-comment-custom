import type { QuartzComponent } from "@quartz-community/types"

export const Comments: QuartzComponent = (props) => {
  const fileData = props?.fileData

  return (
    <section className="comments">
      <h3>Comments</h3>
      <p>
        Comments loaded
        {fileData?.slug ? ` for ${fileData.slug}` : ""}
      </p>
    </section>
  )
}