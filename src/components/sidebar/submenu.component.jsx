import Label from "../forms/label";
import Link from "next/link";
import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { selectedContainerStyle, selectedTextStyle } from "./selected-style";
import { RiArrowDropUpFill } from "react-icons/ri";

function Submenu({ label: parentLabel, items, currentPath }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="relative text-left text-white pl-3 mt-3">
            {parentLabel}
            <RiArrowDropUpFill
              className={`absolute transition-all duration-150 ease-linear right-0 top-[.1rem] text-2xl ${
                open ? "rotate-180" : ""
              }`}
            />
          </Disclosure.Button>

          <Transition
            enter="transition ease duration-100 transform"
            enterFrom="opacity-0 -translate-y-3"
            enterTo=" translate-y-0"
            leave="transition ease duration-90 transform"
            leaveFrom=" translate-y-0"
            leaveTo="opacity-0 -translate-y-3"
          >
            <Disclosure.Panel>
              {items.map((item, index) => {
                const { label, path, icon } = item;
                const active = path === currentPath;
                let component;

                if (icon) {
                  component = (
                    <Label
                      label={label}
                      icon={icon}
                      iconStyle={clsx([
                        "text-lg",
                        ...selectedTextStyle(active),
                      ])}
                      textStyle={clsx(selectedTextStyle(active))}
                      className={clsx([
                        ...selectedContainerStyle(active),
                        "pl-6",
                      ])}
                    />
                  );
                }

                if (!icon) {
                  component = <Label label={label} />;
                }

                return (
                  <Link key={index} href={path} className="relative">
                    {component}
                  </Link>
                );
              })}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default Submenu;
