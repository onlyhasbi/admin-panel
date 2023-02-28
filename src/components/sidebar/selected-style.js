export const selectedTextStyle = (selected) => [
  { "text-blue-900": selected },
  { "text-white": !selected },
];

export const selectedContainerStyle = (selected) => [
  {
    "bg-white rounded-md py-2 pl-3": selected,
    "py-2 pl-3 hover:bg-blue-500 rounded-md": !selected,
  },
];
