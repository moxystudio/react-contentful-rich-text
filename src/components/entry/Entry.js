import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const Entry = ({ nodeType, entryMap, data }) => {
    const { sys, fields } = get(data, 'target', {});
    const contentType = get(sys, 'contentType.sys.id', '');
    const EntryComponent = entryMap[contentType];

    if (!fields) {
        console.warn(`Embedded entry "${sys.id}" with no fields. Current type: "${sys.type}".`);

        return null;
    }

    if (!EntryComponent) {
        console.warn(`Can't resolve embedded entry of type: "${contentType}"`);

        return null;
    }

    return <EntryComponent data={ { sys, fields } } inline={ nodeType.includes('inline') } />;
};

Entry.propTypes = {
    nodeType: PropTypes.string.isRequired,
    entryMap: PropTypes.object.isRequired,
    data: PropTypes.object,
};

export default Entry;
