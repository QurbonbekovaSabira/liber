import React from "react";
import { Button } from "../../../../components/button";
import { UserIcon } from "../../../../assets/icon/user-icon";
import { Lang } from "../lang/lang";
export const LangSelectBox = () => {
  return (
    <div className="flex grow gap-[20px]">
      <Lang />
      <Button variant="primary" icon={UserIcon}>
        Kirish
      </Button>
    </div>
  );
};
