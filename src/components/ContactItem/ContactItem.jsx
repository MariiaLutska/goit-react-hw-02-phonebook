import React from 'react';
import { Box } from '../Box';

export const ContactItem = ({ item, onDeleteClick }) => {
  return (
    <Box color="primary" as="li">
      {item.name} : {item.number}
      <button
        type="button"
        onClick={() => onDeleteClick(item.id)}
      >
        Delete
      </button>
    </Box>
  );
};