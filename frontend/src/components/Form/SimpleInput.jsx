import React from "react";

export const SimpleInput = React.memo(function SimpleInput(props) {
  const InputStyle =
    "bg-gray-100 text-gray-900 placeholder-gray-400 border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent mb-5 text-sm rounded-lg block p-2.5";

  return (
    <>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className={InputStyle}
        placeholder={props.placeholder}
        required
      />
    </>
  );
});
