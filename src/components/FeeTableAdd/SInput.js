import React, { Component } from 'react';
import Input from 'react-validation/build/input';
import PropTypes from 'prop-types';

export default class index extends Component {
  render() {
    const { addRef, name } = this.props;
    return (
      <Input
        ref={(ref) => {
          if (addRef) { addRef(name, ref); }
        }}
        {...this.props}
      />
    );
  }
}
index.propTypes = {
  addRef: PropTypes.object,
  name: PropTypes.object,
};

index.defaultProps = {
  addRef: null,
  name: null,
};
