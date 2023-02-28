import clsx from "clsx";

function ModalBackground() {
  return (
    <div
      className={clsx([
        "absolute top-0 left-0 block w-screen h-screen z-[99] bg-black/25 ",
      ])}
    />
  );
}

export default ModalBackground;
