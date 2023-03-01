import clsx from "clsx";
import { forwardRef } from "react";

const Select = forwardRef(function Select(props, ref) {
  const { name, options, className } = props;

  return (
    <select
      ref={ref}
      name={name}
      id={name}
      className={clsx([
        "rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        className,
      ])}
    >
      {options.map(({ label, value }) => {
        return <option value={value}>{label}</option>;
      })}
    </select>
  );
});

export default Select;
