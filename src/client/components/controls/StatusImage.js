import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import ok from '../../../../public/images/ok.png';
import error from '../../../../public/images/error.png';

class StatusImage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    if (this.props.hasError) {
      return <div class="alert alert-danger w-100" role="alert">
      Failed to process, the code has some problem to execute
    </div>;
    } else if (this.props.message !== '') {
      return <div class="alert alert-success w-100" role="alert">
      Code Successfully compiled and executed
    </div>;
    }
    return '';
  }
}

StatusImage.propTypes = {
  hasError: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default StatusImage;
