import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import Marks from '../marks';

const Hyperlink = ({ data, content, nodeType }) => {
    const uri = nodeType === 'asset-hyperlink' ? get(data, 'target.fields.file.url', '') : get(data, 'uri');
    const { marks, value } = content[0];

    const isEmail = /\S+@\S+\.\S+/.test(uri);
    const href = isEmail ? `mailto:${uri}` : uri;

    return (
        <a
            data-type={ isEmail ? 'email-hyperlink' : nodeType }
            href={ href }
            rel="noopener noreferrer"
            target="_blank">
            <Marks marks={ marks }>{ value }</Marks>
        </a>
    );
};

Hyperlink.propTypes = {
    data: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
    nodeType: PropTypes.string,
};

export default Hyperlink;
