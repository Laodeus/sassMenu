# Menu Component

## Description

A customizable menu component built with React and TypeScript. This component allows you to easily create navigation menus for your web applications.

## Table of Contents

- [Usage](#usage)
- [Props](#props)

## Usage
To use the Menu component, simply import it into your React application and pass the necessary props:

```javascript
import React from 'react';
import Menu from 'menu-component';

const menuElements = [
  {
    name: 'Home',
    action: ()=>{/* action */},
    icon : "⌂"
  },
  // Add more menu elements here
];

function App() {
  return (
    <div className="App">
      <Menu menuElements={menuElements} />
    </div>
  );
}

export default App;

```

## Props
The Menu component accepts the following props:

- menuElements (required): An array of menu elements to display.
Each menu element should be an object with the following properties:

- name (string): The name of the menu item.
- action (function): the action associated with the menu item.
- icon (string): the icon string format associated with the menu item

```javascript
const menuElements : MenuElements[] = [
  {
    name: 'Home',
    icon: '⌂',
    action: ()=>{console.log('home')}
  },
  {
    name: 'About',
    icon: 'ℹ',
    action: ()=>{console.log('about')}
  },
  {
    name: 'Contact',
    icon: '✉️',
    action: ()=>{console.log('contact')}
  },
    ... 
]
```