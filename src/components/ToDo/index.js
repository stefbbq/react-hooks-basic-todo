import React, { useState } from "react";
import { TextField, List, ListItem, ListItemText } from "@material-ui/core";

export default function ToDo() {
  const [items, updateItems] = useState([
    { name: "Cat", completed: false },
    { name: "Rhino", completed: false },
    { name: "Catepillar", completed: false }
  ]);
  const [fieldValue, updateField] = useState("");

  const updateItem = name => {
    updateItems(
      items.map(item => {
        if (item.name === name) item.completed = !item.completed;
        return item;
      })
    );
  };

  const handleInputChange = e => {
    updateField(e.target.value);
  };

  const addItem = e => {
    if (e.keyCode == 13 && fieldValue.length > 1) {
      updateItems([...items, { name: fieldValue, completed: false }]);
      updateField("");
    }
  };

  return (
    <>
      <TextField
        label="Enter Item"
        onKeyDown={addItem}
        onChange={handleInputChange}
        value={fieldValue}
      />
      <List>
        {items.map(item => {
          return (
            <ListItem button onClick={() => updateItem(item.name)}>
              <ListItemText
                primary={item.name}
                style={item.completed ? { textDecoration: "line-through" } : {}}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
