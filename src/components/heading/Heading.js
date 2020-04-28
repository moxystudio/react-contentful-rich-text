import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ nodeType, content }) => {
    const Tag = `h${nodeType.split('-')[1]}`;

    return <Tag data-type={ nodeType }>{ content[0].value }</Tag>;
};

Heading.propTypes = {
    nodeType: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
};

export default Heading;
