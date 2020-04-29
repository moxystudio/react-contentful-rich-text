import React from 'react';
import PropTypes from 'prop-types';

import Content from '../content';

const Blockquote = ({ content, entryMap, level }) => (
    <blockquote data-type="blockquote">
        <Content data={ { content } } entryMap={ entryMap } level={ level + 1 } />
    </blockquote>
);

Blockquote.propTypes = {
    content: PropTypes.array.isRequired,
    level: PropTypes.number.isRequired,
    entryMap: PropTypes.object.isRequired,
};

export default Blockquote;
