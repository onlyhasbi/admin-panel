import clsx from "clsx";
import forwardRef from "react";

function Radio(props) {
  const { className, name, vertical, options } = props;

  return (
    <div
      className={clsx([
        "flex gap-x-6",
        { "flex-col gap-y-3": vertical },
        className,
      ])}
    >
      {options.map((option, index) => {
        const { label, labelStyle, value } = option;
        return (
          <div key={index} className="flex gap-x-2 items-center">
            <input
              type="radio"
              id={name}
              name={name}
              value={value}
              className="focus:border-0 focus:ring-0"
            />
            <label htmlFor={name} className="text-slate-700 text-sm">
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Radio;
