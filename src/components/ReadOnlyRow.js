import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <button
        type="button"
        onClick={(event) => handleEditClick(event, contact)}
      >
        Edit
      </button>
      <button type="button" onClick={() => handleDeleteClick(contact.id)}>
        Delete
      </button>
      <button type="button">view</button>
    </tr>
  );
};

export default ReadOnlyRow;
