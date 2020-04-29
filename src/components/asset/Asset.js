import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const Asset = ({ data }) => {
    const { url, description, contentType } = get(data, 'target.fields.file', {});

    if (contentType.includes('image')) {
        return <img data-type="image" src={ url } alt={ description } />;
    }

    if (contentType.includes('video')) {
        return (
            <video data-type="video" controls controlsList="nodownload">
                <source src={ url } type={ contentType } />
            </video>
        );
    }

    console.warn(`Can't resolve embedded asset of type: "${contentType}"`);

    return null;
};

Asset.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Asset;
