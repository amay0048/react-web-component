<p align="center">
  <img alt="React Web Component Logo" src="https://raw.githubusercontent.com/WeltN24/react-web-component/master/docs/images/react-web-component-logo.png">
</p>

# React Web Component

Create Web Components with React

* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [Adding CSS to your web component using `react-web-component-style-loader`](#adding-css-to-your-web-component-using-react-web-component-style-loader)
* [Adding CSS to your web component imperatively](#adding-css-to-your-web-component-imperatively)
* [Usage with `react-router`](#usage-with-react-router)
* [Issues](#issues)

## Installation

React Web Component is available as the `react-web-component` package on npm.

```
yarn add react-web-component
```

## Basic Usage

To create a web component with `react-web-component`, simply pass a React component as the first parameter to `ReactWebComponent.create` and the name of the web component you would like to create as the second parameter.

```javascript
import React from 'react';
import ReactWebComponent from 'react-web-component';

class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

ReactWebComponent.create(<App />, 'my-component');
```
Then in your HTML simply use your web component, in this case named `my-component`.

```html
<my-component></my-component>
```

Note that `react-web-component` does not limit you in the complexity of your React component. You can pass an entire single page application in your web component if you need to.

## Adding CSS to your web component using `react-web-component-style-loader`

The challenge of adding CSS to your web component is that (as compared to a regular React component) you cannot simply put your CSS anywhere in your site, you need to inject it into the shadow dom of your web component, while at the same time you'll still want to use state of the art tooling (i.e. webpack) and create component based (S)CSS files.

We've got you covered. You can use the [react-web-component-style-loader](https://github.com/WeltN24/react-web-component-style-loader) webpack loader module that in combination with `react-web-component` will inject the css imported anywhere in your project into your web component. Here is a quick example:

**App.js**
```javascript
import React from 'react';
import './app.css';

export default class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}
```
**index.js**
```javascript
import React from 'react';
import ReactWebComponent from 'react-web-component';
import App from './App';
import './index.css';

ReactWebComponent.create(<App />, 'my-component');
```

Using the `react-web-component-style-loader` both the CSS from `app.css` as well as `index.css` will end up in your web component. Read more about it in the [react-web-component-style-loader repository](https://github.com/WeltN24/react-web-component-style-loader).

## Adding CSS to your web component imperatively

* *todo: allow `ReactWebComponent.create(<App />, 'my-component', { style: '' });`*
* *todo: allow `ReactWebComponent.create(<App />, 'my-component', { cssFile: '' });`*

## Usage with `react-router`

`react-web-component` works with `react-router` with one restriction: Since web components live within a host website you should now modify the URL of the website when the web component does internal routing. Luckily `react-router` comes with an _in memory_ router that does not alter the URL and keeps the state of the router internally.

```javascript
import React from 'react';
import {
  MemoryRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import ReactWebComponent from 'react-web-component';
import { Home, About, Topics } from './components';

const App = withRouter(({ history}) => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
))

const RoutedApp = () => (
  <Router initialEntries={[ '/' ]}>
    <App />
  </Router>
);

ReactWebComponent.create(<RoutedApp />, 'my-routed-component');
```

## Issues

### Some events won't be triggered

If you encounter that an event that you rely on will not get triggered this is probably our fault (or Facebook's to be precise). React does not catch events inside shadow dom. A bug ticket has been filed for this at [react#10422](https://github.com/facebook/react/issues/10422). For now, we have created a workaround for this [in the shape of another npm package](https://github.com/WeltN24/react-shadow-dom-retarget-events) that this library depends on. In this library we listen for events on the DOM level and pass them on to React. If an event does not get triggered it probably means we have forgotten it in the list of events that we subscribe to. This is very inconvenient but not a problem. We can simply add it. Open an issue or a PR at [WeltN24/react-shadow-dom-retarget-events](https://github.com/WeltN24/react-shadow-dom-retarget-events) and we will gladly add the event.