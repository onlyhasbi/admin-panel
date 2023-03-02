import clsx from "clsx";

function ModalBackground() {
  return (
    <div
      className={clsx([
        "overflow-auto fixed top-0 left-0 w-full h-full z-1 bg-black/25 ",
      ])}
    />
  );
}

export default ModalBackground;
