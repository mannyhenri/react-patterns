import React from 'react';
import PropTypes from 'prop-types';

const Single = props => (
  <li className="col s4">
    <div className="card teal darken-1">
      <div className="card-content white-text">
        <span className="card-title">{props.note.title}</span>
        <p>{props.note.details}</p>
      </div>
      <div className="card-action">
        <a href="" role="button" onClick={() => props.deleteNote(props.note.id)}>Delete</a>
      </div>
    </div>
  </li>
);

Single.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default Single;
