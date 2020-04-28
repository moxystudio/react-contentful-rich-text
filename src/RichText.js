import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Content from './components/content';

const RichText = ({ data, entryMap, className }) => (
    <div className={ classNames('react-contentful-rich-text', className) }>
        <Content data={ data } entryMap={ entryMap } level={ 0 } />
    </div>
);

RichText.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    entryMap: PropTypes.object,
};

RichText.defaultProps = {
    entryMap: {},
};

export default RichText;
