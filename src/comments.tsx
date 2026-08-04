import { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types"

const Comments: QuartzComponent = ({ fileData }) => {
  return (
    <section class="comments">
      <h3>Comments</h3>
      <p>Comments loaded for {fileData.slug}</p>
    </section>
  )
}

Comments.css = `
.comments {
  margin-top: 2rem;
}
`

export default Comments
export { Comments }