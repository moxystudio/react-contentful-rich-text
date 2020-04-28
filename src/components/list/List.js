import React from 'react';
import PropTypes from 'prop-types';

import Content from '../content';

const List = ({ nodeType, content, entryMap, keyPrefix, level }) => {
    const Tag = nodeType === 'ordered-list' ? 'ol' : 'ul';

    return (
        <Tag data-type={ nodeType }>
            { content.map((item, index) => (
                <li data-type="list-item" key={ `${keyPrefix}-item-${index}` }>
                    <Content data={ { content: item.content } } entryMap={ entryMap } level={ level + 1 } />
                </li>
            )) }
        </Tag>
    );
};

List.propTypes = {
    nodeType: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    level: PropTypes.number.isRequired,
    keyPrefix: PropTypes.string.isRequired,
    entryMap: PropTypes.object.isRequired,
};

export default List;
