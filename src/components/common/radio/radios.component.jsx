import Radio from "./radio.component";
import { forwardRef, useMemo } from "react";

const Radios = forwardRef(({ options, name, ...rest }, ref) => {
  return useMemo(() => {
    return options.map(
      ({ value, label }) => {
        return (
          <Radio
            ref={ref}
            key={value}
            name={name}
            value={value}
            label={label}
            {...rest}
          />
        );
      },
      [options]
    );
  });
});

export default Radios;
