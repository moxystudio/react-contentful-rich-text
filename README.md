# react-contentful-rich-text

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/react-contentful-rich-text
[downloads-image]:https://img.shields.io/npm/dm/@moxy/react-contentful-rich-text.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/react-contentful-rich-text.svg
[build-status-url]:https://github.com/moxystudio/react-contentful-rich-text/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/react-contentful-rich-text/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/react-contentful-rich-text
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/react-contentful-rich-text/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/react-contentful-rich-text
[david-dm-image]:https://img.shields.io/david/moxystudio/react-contentful-rich-text.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/react-contentful-rich-text?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/react-contentful-rich-text.svg

A react component that transforms a contentful rich text structure to HTML.

## Installation

```sh
$ npm install @moxy/react-contentful-rich-text
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Motivation

Content Management Systems (CMS) usually provide a custom text field that lets users define headings, font styles, lists, quotes, links, assets and many more.

Each CMS provides this rich text in a specific format, usually a data structure in json, to be interpreted. Contentful is one of those content management systems.

In common use cases, rich text data must be represented as HTML. Based on this use cases, there should be an easier way to render Contentful rich text as HTML.

## Usage

```js
import React from 'react';
import RichText from '@moxy/react-contentful-rich-text';

const ContentType1 = ({ inline, data }) => (
    <div>
        <h2>{ data.fields.title }</h2>
        <p>{ data.fields.description }</p>
    </div>
);

const entryMap = {
    myContentType1: ContentType1,
};

const MyComponent = ({ richTextField }) => (
    <div className="container">
        <RichText data={ richTextField } entryMap={ entryMap }/>
    </div>
);

export default MyComponent;
```

Import the styleguide base styles in the app's entry CSS file:

```css
@import "@moxy/react-contentful-rich-text/dist/index.css";
```

..or in your entry JavaScript file:

```js
import '@moxy/react-contentful-rich-text/dist/index.css';
```

## Styling

Each HTML element will be rendered with a data attribute `data-type` to provide an easier way to style them.

```css
.myReactContentfulRichText {
    & [data-type="paragraph"] {
        margin: 1em 0;
    }

    & [data-type="text"] {
        font-size: 14px;
    }

    & [data-type="heading-1"] { ... }
    & [data-type="heading-2"] { ... }
    & [data-type="heading-3"] { ... }
    & [data-type="heading-4"] { ... }
    & [data-type="heading-5"] { ... }
    & [data-type="heading-6"] { ... }
    
    & [data-type="bold"] { ... }
    & [data-type="italic"] { ... }
    & [data-type="underline"] { ... }
    & [data-type="code"] { ... }
    & [data-type="multi-code"] { ... }
    
    & [data-type="unordered-list"] { ... }
    & [data-type="ordered-list"] { ... }
    & [data-type="list-item"] { ... }
    
    & [data-type="hyperlink"] { ... }
    & [data-type="asset-hyperlink"] { ... }
    & [data-type="email-hyperlink"] { ... }
    
    & [data-type="blockquote"] { ... }
    & [data-type="thematic-break"] { ... }
    
    & [data-type="image"] { ... }
    & [data-type="video"] { ... }
}
```

## API

The following props are available for the `RichText` component.

#### data

Type: `object` | Required: `false`

Rich text field value.

Example:
```js
{
    "nodeType": "document",
    "data": {},
    "content": [...],
}
```

#### entryMap

Type: `object` | Required: `false`

Map of Contentful content types to react components. Required to render embedded entries.

Example:

```js
{
    myContentType1: ContentType1
    myContentType2: ContentType2
}
```

Where `myContentType#` is the id of a content type and `ContentType#` is a react component that will receive the data from an entry of that content type.

The react component will also receive a boolean `inline` prop that details if an embedded entry should be rendered inline.

#### className

Type: `string` | Required: `false`

A className to apply to the component.

## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```

## Demo

A demo [Next.js](https://nextjs.org/) project is available in the [`/demo`](./demo) folder so you can try out this component.

First, build the `react-contentful-rich-text` project with:

```sh
$ npm run build
```

To run the demo, do the following inside the demo's folder:

```sh
$ npm i
$ npm run dev
```

*Note: Everytime a change is made to the package a rebuild is required to reflect those changes on the demo.*

## FAQ

### I can't override the component's CSS, what's happening?

There is an ongoing [next.js issue](https://github.com/zeit/next.js/issues/10148) about the loading order of modules and global CSS in development mode. This has been fixed in [v9.3.6-canary.0](https://github.com/zeit/next.js/releases/tag/v9.3.6-canary.0), so you can either update `next.js` to a version higher than `v9.3.5`, or simply increase the CSS specificity when overriding component's classes, as we did in the [`demo`](./demo/pages/index.module.css), e.g. having the page or section CSS wrap the component's one.

## License

Released under the [MIT License](./LICENSE).
