import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './EditorialTest.module.css';

const EditorialTest = ({ inline, data }) => {
    const { title, description } = data.fields;

    return (
        <div className={ classNames(styles.container, { [styles.inline]: inline }) }>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
    );
};

EditorialTest.propTypes = {
    inline: PropTypes.bool,
    data: PropTypes.object,
};

export default EditorialTest;
