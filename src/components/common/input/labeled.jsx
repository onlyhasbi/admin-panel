import clsx from "clsx";

function Labeled({ id, label, className, children }) {
  return (
    <div className={clsx(["flex flex-col gap-y-2", className])}>
      <label htmlFor={id} className="text-slate-700 text-sm">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Labeled;
