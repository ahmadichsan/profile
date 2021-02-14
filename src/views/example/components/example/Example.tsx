import React from 'react';
import PropTypes from 'prop-types';
import { ExampleProps } from './Example.interfaces';
import './Example.scss';

export default function Example(props: ExampleProps) {
  return (
    <div>
      Example Component {props.title}
    </div>
  );
}

Example.propTypes = {
  title: PropTypes.string,
};

Example.defaultProps = {
  title: 'Example',
};
