import { v4 as uuidv4 } from "uuid"

export default function Form({ text, items, setItems, setText }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const newItems = {
        id: uuidv4(),
        title: text,
      }
      setItems([...items, newItems])
      setText("")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="e.g eggs"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  )
}
