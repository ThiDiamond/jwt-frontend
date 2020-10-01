import React from 'react';
import PropTypes from 'prop-types';

const AlertError = ({ message, visible, onDismiss }) =>
  visible ? (
    <div
      className="alert alert-danger mt-3 alert-dismissible fade show text-left"
      role="alert"
    >
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  ) : null;

AlertError.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
};
export default AlertError;
