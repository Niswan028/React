import React, { useState } from 'react';
import {FaTrash } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice",
    },
    {
      id: 2,
      checked: false,
      item: "Studied",
    },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => {
                const updatedItems = items.map((i) =>
                  i.id === item.id ? { ...i, checked: !i.checked } : i
                );
                setItems(updatedItems);
              }}
            />
            <label style={{ textDecoration: item.checked ? "line-through" : "none" }}>
              {item.item}
            </label>
            <FaTrash 
            role="button"
            tabIndex={0}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
