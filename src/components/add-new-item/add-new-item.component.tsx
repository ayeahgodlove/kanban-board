import React, { useState } from "react";
import { AddItemButton } from "../layout/add-new-button/add-new-button.style";
import NewItemForm from "../form/new-item-form.component";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};
export const AddNewItem: React.FC<AddNewItemProps> = ({
  onAdd,
  toggleButtonText,
  dark,
}) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
