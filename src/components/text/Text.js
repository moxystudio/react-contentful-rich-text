import React from 'react';
import PropTypes from 'prop-types';

import Marks from '../marks';

const Text = ({ nodeType, marks, value }) => (
    <span data-type={ nodeType }>
        <Marks marks={ marks }>{ value }</Marks>
    </span>
);

Text.propTypes = {
    nodeType: PropTypes.string,
    marks: PropTypes.array,
    value: PropTypes.string,
};

export default Text;
