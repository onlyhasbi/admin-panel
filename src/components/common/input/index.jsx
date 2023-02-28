function Input({ label, name, className, ...rest }) {
  const input = (
    <input
      id={name}
      name={name}
      className={`rounded-lg border-slate-300 ${className}`}
      {...rest}
    />
  );
  return label ? (
    <Labeled id={name} label={label}>
      {input}
    </Labeled>
  ) : (
    input
  );
}

function Labeled({ id, label, children }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className="text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Input;

// text, number, number spinner horizontal | vertical, currency, password
