import React from 'react';
import PropTypes from 'prop-types';
import Single from './Single';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNote = this.deleteNote.bind(this);
  }
  deleteNote(id) {
    this.props.deleteNote(id);
  }
  renderItems() {
    return this.props.notes.map(item => (
      <Single
        key={item.id}
        note={item}
        deleteNote={this.deleteNote}
      />
      ));
  }
  render() {
    return (
      <div className="row">
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

Grid.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteNote: PropTypes.func.isRequired,
};
