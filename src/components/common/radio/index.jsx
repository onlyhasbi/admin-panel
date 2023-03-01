import clsx from "clsx";

import { forwardRef } from "react";
import Labeled from "../input/labeled";

const Radio = forwardRef(function Radio(props, ref) {
  const { className, name, label, labelStyle, vertical, options, ...rest } =
    props;
  const radio = (
    <div
      className={clsx([
        "flex gap-x-6 mt-1",
        { "flex-col gap-y-3": vertical },
        className,
      ])}
    >
      {options.map((option, index) => {
        const { label, labelStyle, value } = option;
        return (
          <div key={index} className="flex gap-x-2 items-center">
            <input
              ref={ref}
              type="radio"
              id={value}
              name={name}
              value={value}
              className="focus:border-0 focus:ring-0"
              {...rest}
            />
            <label htmlFor={value} className="text-slate-700 text-sm">
              {label}
            </label>
          </div>
        );
      })}
    </div>
  );

  return label ? (
    <Labeled id="" label={label} className={labelStyle}>
      {radio}
    </Labeled>
  ) : (
    radio
  );
});

export default Radio;
