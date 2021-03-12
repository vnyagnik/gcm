# React

```
npx create-react-app hello-react --use-npm
```

```
cd hello-react
npm start
```

ReactDom renders takes 2 arguments => 
* 1. Element to create 
* 2. To render
    Create element takes 3 arguments:
    * 1. Tag we want to create
    * 2. Properties that this element wants to have : keep it null
    * 3. Any children.

```
ReactDOM.render(React.createElement("h1",null,"hello"),
    document.getElementById("root")
);


ReactDOM.render(React.createElement("h1",{style: {color:"red"} },"hello"),
    document.getElementById("root")
);
```

```
ReactDOM.render(
  <ul>
    <li>Pizza</li>
    <li>Pav Bhaji</li>
    <li>Dosa</li>
    <li>Sandwich</li>
  </ul>,
  document.getElementById("root")
);
```
## Hooks and UseState

import React, { useState } from "react";
Hook is a function that allows you to add functionality
=> For changing the view, useState is required.

```
const [status] = useState("Open");
```

Dependency arrives here if you have 2 useState values.
Only Changed text field will be called.

useEffect( () => { 1para }, [2para] );

```
const [val, setVal] = useState("");
const [val2, setVal2] = useState("");

useEffect(() => {
    console.log(`Name is: ${val}`);
  },[val]);
-------------------------------------------------------------------------------
useEffect(() => {
  console.log(`Name is: ${val2}`);
},[val2]);
```
UseReducer takes the current state and returns the new state.