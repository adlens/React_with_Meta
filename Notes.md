# Course Introduction

## Import and export js modules

- Exports:
  - Default export (at most one for each file, and the function name should be the same as the file name):
    1. `export default function addTwo(...) {...}`
    2. `function addTwo(...) {...};`\
       `export default addTwo;` at the end
  - Named exports:
    1. `export function addTwo(...){}`
    2. `export { <function_names> };` at the end
- Imports:
  - Default: `import addTwo from "./addTwo";`
  - Named: `import { addTwo } from "./addTwo";`

## initialize npm and build React app on local machine

- Open terminal in preferred folder
- `npm init react-app <app_name>`, enter the folder with name <app_name>
- Or create a folder first, go to that folder in Terminal and type in `npm init react-app .`
- `npm start` to serve the app in browser

## React components

- All the components should be named with Capitalized initial.
- Inside the components, return a HTML like JSX.
- JSX allows a mixture of HTML, JS, CSS codes. In `{}`, you can write any JS code.

## Styling JSX elements

1. Use CSS. `<div className="promo-section">`. In CSS file:

```
.promo-section {
  font-weight: bold;
  line-height: 20px;
}
```

2. Inline style: `<h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>`. The name of the properties are camelCased.
3. Use separate constant: `const styles = {color: "tomato",}` <span style="color:violet">the values should be wrapped inside ""</span> and `<h1 style={styles}>`

## Ternary operators and functions in JSX

- `{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}`

# Dynamic events and how to handle them

## Event errors

- `try-catch`

```
try {
    (5).toUpperCase();
}
catch(e) {
    console.log(`Oops, you can't uppercase a number.
        Trying to do it resulted in the following`, e);
}
```

- In plain HTML `onclick="clickHandler()"`. In React `onClick={clickHandler}`, camelCased and doesn't need parentheses

## Event handling and embedded expressions

### Handling events using inline anonymous ES5 functions

```
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```

### Handling events using inline anonymous ES6 functions (arrow functions)

```
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```

### Handling events using separate function declarations

```
function App() {
    function thirdExample() {
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
};
```

### Handling events using separate function expressions

```
const fourthExample = () => console.log('fourth example');
```

## Data and events

### Data flow in React

- Parent to children, one-way.
- `props` are immutable and belongs to the parent of the current component
- `states` are mutable and belong to the current component itself.

### Using hooks (useState)

- You can only call hooks at the top level of your component or your own hooks.
- You cannot call hooks inside loops or conditions.
- You can only call hooks from React functions, and not regular JavaScript functions.

### Props drilling

- Props drilling simply means passing a prop through props objects through several layers of components.
- The more layers there are, the more repetitive and unnecessary this feels.

```
function Main(props) {
  return <Header msg={props.msg} />;
};

function Header(props) {
  return (
    <div style={{ border: "10px solid whitesmoke" }}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} />
    </div>
  );
};

function Wrapper(props) {
  return (
    <div style={{ border: "10px solid lightgray" }}>
      <h2>Wrapper here</h2>
      <Button msg={props.msg} />
    </div>
  );
};

function Button(props) {
  return (
    <div style={{ border: "20px solid orange" }}>
      <h3>This is the Button component</h3>
      <button onClick={() => alert(props.msg)}>Click me!</button>
    </div>
  );
};

function App() {
  return (
    <Main
      msg="I passed through the Header and the Wrapper and I reached the Button component"
    />
  );
};

export default App;
```

- `message` was passed `App` -> `Main` -> `Header` -> `Wrapper` -> `Button`

# Week3 Navigation, updating and assets in React.js

## Linking and Routing

- Install React Router Dom `npm i react-router-dom`
- In `index.js`, `import {BrowserRouter} from "react-router-dom"`, wrap `<App/>` inside `<BrowserRouter>` tags
- In `App.js`:

1. `import { Routes, Route, Link } from "react-router-dom";`
2. Instead of importing components directly, Use `Routers` and `Route` structure, the components in `element` should be self-closing.

```
<Routes>
  <Route path="/" element={<Homepage />}></Route>
  <Route path="/about" element={<AboutLittleLemon />}></Route>
  <Route path="/contact" element={<Contact />}></Route>
</Routes>
```

3. If navbar is needed, instead of `<a>`, use `<Link>`, e.g. `<Link to="/about" className="nav-item">About Little Lemon</Link>`
