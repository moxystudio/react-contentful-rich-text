import React from 'react';
import RichText from '@moxy/react-contentful-rich-text';

import { mockRichTextField } from './Home.data';
import EditorialTest from './components/editorial-test';

const entryMap = {
    editorialTest: EditorialTest,
};

const Home = () => (
    <div>
        <RichText data={ mockRichTextField } entryMap={ entryMap } />
    </div>
);

export default Home;
