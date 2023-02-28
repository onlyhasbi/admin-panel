import Label from "../forms/label";
import Link from "next/link";
import clsx from "clsx";
import { Disclosure } from "@headlessui/react";
import { selectedContainerStyle, selectedTextStyle } from "./selected-style";

function Submenu({ label: parentLabel, items, currentPath }) {
  return (
    <Disclosure>
      <Disclosure.Button className="text-left text-white pl-3">
        {parentLabel}
      </Disclosure.Button>
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
                iconStyle={clsx(["text-lg", ...selectedTextStyle(active)])}
                textStyle={clsx(selectedTextStyle(active))}
                className={clsx([...selectedContainerStyle(active), "pl-6"])}
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
    </Disclosure>
  );
}

export default Submenu;
