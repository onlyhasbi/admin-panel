import Submenu from "./submenu.component";
import Label from "../forms/label";
import Link from "next/link";
import clsx from "clsx";
import { selectedContainerStyle, selectedTextStyle } from "./selected-style";

function List({ items, currentPath }) {
  return items.map((item, index) => {
    const { label, path, icon, submenu } = item;
    const isSubmenu = submenu?.length > 0;
    const active = path === currentPath;

    if (isSubmenu) {
      return (
        <Submenu
          key={index}
          label={label}
          items={submenu}
          currentPath={currentPath}
        />
      );
    }

    return (
      <Link key={index} href={path} className="relative">
        <Label
          label={label}
          icon={icon}
          iconStyle={clsx(["text-lg", ...selectedTextStyle(active)])}
          textStyle={clsx(selectedTextStyle(active))}
          className={clsx([selectedContainerStyle(active), "w-[11.5rem]"])}
        />
      </Link>
    );
  });
}

export default List;
