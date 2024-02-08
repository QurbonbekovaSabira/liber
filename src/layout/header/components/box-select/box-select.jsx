import React from "react";
import { Input } from "../input";
import { Select } from "../select";
export const BoxSelect = () => {
  return (
    <div className=" flex  grow gap-1">
      <Select />
      <Input />
    </div>
  );
};
