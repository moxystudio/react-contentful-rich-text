import React from 'react';
import PropTypes from 'prop-types';

import Content from '../content';

const Paragraph = ({ nodeType, content, entryMap, level }) => (
    <div data-type={ nodeType }>
        <Content data={ { content } } entryMap={ entryMap } level={ level + 1 } />
    </div>
);

Paragraph.propTypes = {
    nodeType: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    level: PropTypes.number.isRequired,
    entryMap: PropTypes.object.isRequired,
};

export default Paragraph;
