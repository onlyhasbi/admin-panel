import clsx from "clsx";
import Labeled from "./labeled";
import { omit } from "lodash";
import { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  const { label, name, placeholder, inputStyle, labelStyle, ...rest } = props;

  const input = (
    <input
      ref={ref}
      id={name}
      name={name}
      type="text"
      placeholder={placeholder}
      className={clsx([
        "rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        inputStyle,
      ])}
      {...omit(rest, "className")}
    />
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {input}
    </Labeled>
  ) : (
    input
  );
});

export default Input;
