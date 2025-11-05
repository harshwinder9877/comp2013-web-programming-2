export default function PostForm({ title, body, onChange, onSubmit, disabled }) {
  return (
    <form onSubmit={onSubmit} className="center">
      <div className="form-row">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={onChange}
          disabled={disabled}
          className="input"
        />
      </div>

      <div className="form-row">
        <label htmlFor="body">Body:</label>
        <input
          id="body"
          name="body"
          value={body}
          onChange={onChange}
          disabled={disabled}
          className="input textarea"
        />
      </div>

      <button type="submit" disabled={disabled} className="btn">
        Submit
      </button>
    </form>
  );
}