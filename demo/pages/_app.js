/* eslint-disable react/prop-types */
import '@moxy/react-contentful-rich-text/dist/index.css';

import React from 'react';

const App = ({ Component, pageProps }) => (
    <Component { ...pageProps } />
);

export default App;
