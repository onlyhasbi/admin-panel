import clsx from "clsx";
import Labeled from "./labeled";
import { RiCloseFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { omit } from "lodash";

function Search(props) {
  const [focus, setFocus] = useState(false);
  const {
    label,
    name,
    placeholder,
    labelStyle,
    inputStyle,
    className,
    search,
    setSearch,
    ...rest
  } = props;

  const searchRef = useRef();
  const isFill = search.length > 0;

  const handleClear = () => {
    setSearch("");
    searchRef.current.focus();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const input = (
    <div className={clsx(["relative", className])}>
      <input
        ref={searchRef}
        id={name}
        type="text"
        name={name}
        className={clsx([
          "w-full rounded-md placeholder:text-slate-400 text-slate-600 focus:border-transparent border-slate-300",
          inputStyle,
        ])}
        placeholder={placeholder}
        onChange={handleChange}
        value={search}
        {...omit(rest, "className")}
      />
      {isFill ? (
        <button className="absolute top-3 right-3" onClick={handleClear}>
          <RiCloseFill className="block text-slate-400 hover:text-red-400 hover:rounded-full" />
        </button>
      ) : null}
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

export default Search;
