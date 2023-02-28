import clsx from "clsx";
import ModalBackground from "./modal-background.component";
import ModalContent from "./modal-content.component";
import Portal from "@/components/portal";
import { Transition } from "@headlessui/react";

function Modal(props) {
  const { onOpen } = props;
  return (
    <Transition show={onOpen}>
      <Transition.Child
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ModalBackground />
      </Transition.Child>
      <Transition.Child
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ModalContent props={props} />
      </Transition.Child>
    </Transition>
  );
}

export default Portal(Modal);
