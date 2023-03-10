import clsx from "clsx";
import Labeled from "./labeled";
import { forwardRef, useReducer } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { omit } from "lodash";

const Password = forwardRef(function Password(props, ref) {
  const [isShowPassword, toggle] = useReducer((show) => !show, false);
  const {
    label,
    name,
    placeholder,
    labelStyle,
    inputStyle,
    className,
    ...rest
  } = props;

  const input = (
    <div className={clsx(["relative", className])}>
      <input
        ref={ref}
        id={name}
        name={name}
        type={getType(isShowPassword)}
        className={clsx([
          "w-full rounded-md placeholder:text-slate-400 text-slate-600 border-slate-300 focus:border-transparent",
          inputStyle,
        ])}
        placeholder={placeholder}
        {...omit(rest, "className")}
      />
      {isShowPassword ? (
        <RiEyeLine
          className="absolute top-3 right-3 text-slate-400"
          onClick={toggle}
        />
      ) : (
        <RiEyeOffLine
          className="absolute top-3 right-3 text-slate-400"
          onClick={toggle}
        />
      )}
    </div>
  );

  return label ? (
    <Labeled id={name} label={label} className={labelStyle}>
      {input}
    </Labeled>
  ) : (
    input
  );
});

function getType(isText) {
  return isText ? "text" : "password";
}

export default Password;
