import clsx from "clsx";
import Labeled from "./labeled";
import { useReducer } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { omit } from "lodash";

function Password(props) {
  const [isShowPassword, toggle] = useReducer((show) => !show, false);
  const type = isShowPassword ? "text" : "password";
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
        id={name}
        type={type}
        name={name}
        className={clsx([
          "rounded-md placeholder:text-slate-400 text-slate-600 border-slate-300 focus:border-transparent",
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
}

export default Password;
