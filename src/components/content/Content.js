import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import Asset from '../asset';
import Blockquote from '../blockquote';
import Entry from '../entry';
import Heading from '../heading';
import Hyperlink from '../hyperlink';
import List from '../list';
import Paragraph from '../paragraph';
import Text from '../text';

const Content = ({ data, entryMap, level }) => {
    const content = get(data, 'content', []);

    return content.map(({ nodeType, ...rest }, index) => {
        const key = `${nodeType}-${level}-${index}`;
        const props = {
            ...rest,
            level,
            nodeType,
            entryMap,
            keyPrefix: key,
        };

        switch (nodeType) {
        case 'heading-1':
        case 'heading-2':
        case 'heading-3':
        case 'heading-4':
        case 'heading-5':
        case 'heading-6':
            return <Heading key={ key } { ...props } />;
        case 'asset-hyperlink':
        case 'hyperlink':
            return <Hyperlink key={ key } { ...props } />;
        case 'ordered-list':
        case 'unordered-list':
            return <List key={ key } { ...props } />;
        case 'embedded-entry-block':
        case 'embedded-entry-inline':
            return <Entry key={ key } { ...props } />;
        case 'embedded-asset-block':
            return <Asset key={ key } { ...props } />;
        case 'blockquote':
            return <Blockquote key={ key } { ...props } />;
        case 'paragraph':
            return <Paragraph key={ key } { ...props } />;
        case 'text':
            return <Text key={ key } { ...props } />;
        case 'hr':
            return <hr data-type="thematic-break" key={ key } />;
        default:
            return null;
        }
    });
};

Content.propTypes = {
    data: PropTypes.object.isRequired,
    entryMap: PropTypes.object,
    level: PropTypes.number,
};

Content.defaultProps = {
    level: 0,
};

export default Content;
