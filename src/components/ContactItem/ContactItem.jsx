import React from 'react';

export const ContactItem = ({ item, onDeleteClick }) => {
    return (
        <li>
            {item.name}:{item.number}
            <button
                type="button"
                onClick={() => onDeleteClick(item.id)}
            >
                Delete
            </button>
        </li>
    );
};