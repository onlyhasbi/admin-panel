import clsx from "clsx";
import Labeled from "./labeled";
import { NumericFormat } from "react-number-format";
import { omit } from "lodash";
import { forwardRef } from "react";

const Number = forwardRef(function Number(props, ref) {
  const {
    label,
    name,
    placeholder,
    onChange,
    labelStyle,
    inputStyle,
    ...rest
  } = props;

  const input = (
    <NumericFormat
      getInputRef={ref}
      id={name}
      name={name}
      placeholder={placeholder}
      className={clsx([
        "rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
        inputStyle,
      ])}
      allowNegative={false}
      thousandSeparator="."
      decimalSeparator=","
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

export default Number;
