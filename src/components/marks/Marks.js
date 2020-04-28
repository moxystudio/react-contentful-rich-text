import React from 'react';
import PropTypes from 'prop-types';

const MARK_TAG = {
    bold: 'b',
    italic: 'i',
    underline: 'u',
    code: 'code',
};

const renderWithMarks = (marks, value) => {
    if (marks.length === 0) {
        return value;
    }

    let type = marks.shift();
    const Mark = MARK_TAG[type];
    const children = renderWithMarks(marks, value);

    if (Mark) {
        if (type === 'code' && value.includes('\n')) {
            type = 'multi-code';
        }

        return <Mark data-type={ type }>{ children }</Mark>;
    }

    return children;
};

const Marks = ({ marks, children }) => {
    const marksMap = marks.map(({ type }) => type);

    return renderWithMarks(marksMap, children);
};

Marks.propTypes = {
    marks: PropTypes.array,
    value: PropTypes.string,
};

Marks.defaultProps = {
    marks: [],
};

export default Marks;
