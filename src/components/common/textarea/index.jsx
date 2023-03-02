import clsx from "clsx";
import Labeled from "../input/labeled";
import { forwardRef } from "react";

const TextArea = forwardRef(function TextArea(props, ref) {
  const { label, labelStyle, name, row, col, placeholder, className } = props;
  const textarea = (
    <textarea
      ref={ref}
      id={name}
      className={clsx([
        "rounded-md resize-none placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        className,
      ])}
      spellCheck={false}
      placeholder={placeholder}
      name={name}
      row={row}
      col={col}
    ></textarea>
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {textarea}
    </Labeled>
  ) : (
    textarea
  );
});

export default TextArea;
