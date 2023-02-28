import clsx from "clsx";

function Button({ children, ...props }) {
  const { className, danger, warning, primary, ...rest } = props;

  return (
    <button
      className={`${clsx([
        { "bg-red-600": danger },
        { "bg-yellow-400": warning },
        { "bg-blue-600": primary },
      ])} block rounded-md px-4 py-[.3rem] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
