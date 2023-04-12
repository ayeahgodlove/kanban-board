import React, { useState } from "react";
import {
  NewItemButton,
  NewItemFormContainer,
  NewItemInput,
} from "../layout/new-item-form/new-item-form.style";
import { useFocus } from "../../hook/focus.hook";

type Props = {
  onAdd(text: string): void;
};
const NewItemForm: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const inputRef = useFocus();
  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(value);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleAddText}
        placeholder="Enter some text..."
      />
      <NewItemButton onClick={() => onAdd(value)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
