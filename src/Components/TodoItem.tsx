interface IitemComponents {
  completed: boolean;
  id: string;
  title: string;
  onToggleCheckbox: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({
  completed,
  id,
  title,
  onToggleCheckbox,
  onDelete,
}: IitemComponents) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onToggleCheckbox(id, e.target.checked)}
        ></input>
        {title}
      </label>
      <button onClick={() => onDelete(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
