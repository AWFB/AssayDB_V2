import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AssayDetails = ({ assay }) => {
  return (
    <article className='assay-details'>
      <h4>{assay.name}</h4>
      <p>
        <strong>Provider: </strong>
        {assay.provider}
      </p>
      <p>
        <strong>Sample type: </strong>
        {assay.sampType}
      </p>
      <p>
        <strong>Transport: </strong>
        {assay.transport}
      </p>
      <p>
        <strong>Last updated: </strong>
        {formatDistanceToNow(new Date(assay.updatedAt), { addSuffix: true })}
      </p>
    </article>
  )
}
export default AssayDetails
