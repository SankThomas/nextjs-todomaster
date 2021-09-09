export default function List({ items }) {
  console.log(items)
  return (
    <>
      <h2>List component</h2>
      <p>{items.length} items remaining</p>

      <ol>
        {items.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  )
}
