import clsx from "clsx";
import { useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useClickAway } from "@/components/utils/clickAway";

function ModalContent({ props }) {
  const {
    onOpen,
    className,
    onClose: handleClose,
    title,
    close,
    children,
    ...rest
  } = props;

  const modalRef = useRef(null);
  useClickAway(modalRef, onOpen, handleClose);

  return (
    <div
      ref={modalRef}
      className={`${clsx([
        "bg-white rounded-xl shadow-lg p-5",
        "absolute top-[50%] left-[50%] z-[100]",
        "-translate-x-1/2 -translate-y-1/2",
      ])} ${className}`}
      {...rest}
    >
      <div className="relative flex items-center justify-between -mt-[.45rem]">
        <Title title={title} />
        <Close active={close} handleClose={handleClose} />
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Title({ title }) {
  return title ? <h2 className="text-lg font-semibold">{title}</h2> : null;
}

function Close({ active, handleClose }) {
  return active ? (
    <span className="p-1 rounded-full hover:bg-slate-50 cursor-pointer absolute -right-2">
      <RiCloseLine onClick={handleClose} />
    </span>
  ) : null;
}

export default ModalContent;
