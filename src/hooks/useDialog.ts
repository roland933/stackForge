import { useState } from "react";

export function useDialog() {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const hideDialog = () => {
    setOpen(false);
  };

  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };

  return {
    openDialog,
    hideDialog,
    toggleDialog,
    open,
    setOpen
  };
}
