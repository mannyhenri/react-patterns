import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  handleChange(event) {
    this.props.handleChange(event);
  }
  handleSubmit(event) {
    this.props.handleSubmit(event);
  }
  render() {
    const { handleSubmit, currentTitle, handleChange, currentDetails } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input
                id="title"
                name="currentTitle"
                type="text"
                value={currentTitle}
                onChange={handleChange}
                className="validate"
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s7">
              <input
                id="details"
                name="currentDetails"
                type="text"
                value={currentDetails}
                onChange={handleChange}
                className="validate"
              />
              <label htmlFor="details">Details</label>
            </div>
            <div className="input-field col s2">
              <button
                className="btn-large waves-effect waves-light"
                type="submit"
                name="action"
              >Add note</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Form.defaultProps = {
  currentTitle: 'New note',
};

Form.propTypes = {
  currentTitle: PropTypes.string,
  currentDetails: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
