// Listpage

import AssayDetails from './AssayDetails'

const AssayList = ({ searchResults }) => {
  const results = searchResults.map((assay) => (
    <AssayDetails key={assay._id} assay={assay} />
  ))

  const content = results.length ? (
    results
  ) : (
    <article>
      <p>Assay not found</p>
    </article>
  )

  return <main>{content}</main>
}
export default AssayList
