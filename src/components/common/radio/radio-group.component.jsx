import clsx from "clsx";
import Labeled from "../input/labeled";
import { forwardRef } from "react";

function RadioGroup(props) {
  const { className, children, label, labelStyle, vertical } = props;

  const radioGroup = (
    <div
      className={clsx([
        "flex gap-x-6 mt-1",
        { "flex-col gap-y-3": vertical },
        className,
      ])}
    >
      {children}
    </div>
  );

  return label ? (
    <Labeled id="" label={label} className={labelStyle}>
      {radioGroup}
    </Labeled>
  ) : (
    radioGroup
  );
}

export default RadioGroup;
