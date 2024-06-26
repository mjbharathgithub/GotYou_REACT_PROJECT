import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from 'prop-types';

function Note(props) {
  
    Note.propTypes = {
      onDelete: PropTypes.func.isRequired, 
      id: PropTypes.number.isRequired, 
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    };
  
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
