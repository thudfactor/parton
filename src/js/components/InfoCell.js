export default function InfoCell({label, children}) {
  return (
    <>
      <dt>{ label }</dt>
      <dd>{ children }</dd>
    </>
  )
}
