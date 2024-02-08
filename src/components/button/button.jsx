import React from "react";
import clsx from "clsx";
export const Button = ({
  children,
  type,
  onClick,
  variant,
  icon: Icon,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "rounded-[14px] px-[24px] py-[7px] text-lg font-bold",
        {
          "bg-primary flex items-center gap-2 text-white":
            variant === "primary",
        },
        {
          "text-darkPurple flex items-center gap-2 bg-white":
            variant === "white",
        },
        className,
      )}
    >
      {Icon ? <Icon /> : ""}
      {children}
    </button>
  );
};
