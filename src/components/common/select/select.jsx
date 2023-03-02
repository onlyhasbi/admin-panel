import clsx from "clsx";
import Labeled from "../input/labeled";
import { forwardRef, useMemo } from "react";
import { omit } from "lodash";

const Select = forwardRef(function Select(props, ref) {
  const { name, options, className, label, labelStyle, ...rest } = props;

  const list = useMemo(() => {
    return options.map(({ label, value }, index) => {
      return (
        <option key={index} value={value}>
          {label}
        </option>
      );
    });
  }, [options]);

  const select = (
    <select
      ref={ref}
      id={name}
      name={name}
      className={clsx([
        "rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        className,
      ])}
      {...omit(rest, "className")}
    >
      {list}
    </select>
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {select}
    </Labeled>
  ) : (
    select
  );
});

export default Select;
