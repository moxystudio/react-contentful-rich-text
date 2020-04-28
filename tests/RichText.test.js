import React from 'react';
import { render } from '@testing-library/react';
import RichText from '../src/RichText';
import { mockRichTextField } from './mocks';

const EditorialTest = () => <div>Editorial Test</div>;

const defaultProps = {
    data: mockRichTextField,
    entryMap: {
        editorialTest: EditorialTest,
    },
};

const renderWithProps = (props = {}) => render(<RichText { ...defaultProps } { ...props } />);

beforeEach(() => {
    jest.clearAllMocks();
});

describe('RichText Component', () => {
    it('should render correctly', () => {
        const { asFragment } = renderWithProps();

        expect(asFragment()).toMatchSnapshot();
    });
});
