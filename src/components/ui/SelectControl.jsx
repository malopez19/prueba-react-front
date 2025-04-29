export function SelectControl({ id, label, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Seleccionar...</option>
        {options.map((opcion) => (
          <option key={opcion.valor} value={opcion.valor}>
            {opcion.label}
          </option>
        ))}
      </select>
    </div>
  );
}
