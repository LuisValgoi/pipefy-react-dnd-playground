# Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/83d7a973-5c6f-4b71-8fb7-7c97ddacf33c/deploy-status)](https://app.netlify.com/sites/pipefy-react-dnd/deploys)

# Objective
To copy the pipefy user interface to use the `react-drag-and-drop`.

# Dependencies / Tooling

- `cra`: to create the project.

- `styled-components`: to style the components.

- `react-icons`: to use icons in the app (includes material-icons, font-awesome, ionicals, etc).

- `react-dnd`: to use drag and drop;

- `react-dnd-html5-backend`: to serve as the default drag and drop html5 engine.

# Notes CSS

- `box-sizing: border-box;`: to not extrapolate the element's height and width.

- `avatars.adorable.io`: to create sample avatars.

- `flex: 0 0 320px;`: combination of `flex-grow` + `flex-shrink` + `flex-basis`.

- `flex-grow`: the ability to grow amoung their "brothers". Value 0: uses the fixed width.

- `flex-shrink`: the ability to shrink once the screen is small. Value 0: uses the fixed width.

- `flex-basis`: determines the base width or height of the element. Width: once `d-flex-row`. Height: once `d-flex-column`.

- `& + div {...}`: css selector which gets all the `div` which has a prev `div`.

- `color: ... rgba(230, 230, 245, 0.4)`: to add opacity, uses `rgba`.

# Notes Architecture

- `Create a new or keep in the same component?`: when we picture that that POC can be decoupled from the rest of the app, then we create (or, when it works separately).

- `import { Container } from './styles'`: to embed the div and the style of your component.

# Notes Drag And Drop

- `useDrag`: the one which does the action (drag).

- `useDrop`: the one which receives the action (drop).

- `Element.getBoundingClientRect()`: returns a DOMRect object w/ infos about the size of an element and its position relative to the viewport.

- `getClientOffset():` Returns the last recorded { x, y } client offset of the pointer while a drag operation is in progress

# Fonts Used

- [roboto](https://fonts.google.com/specimen/Roboto)

# Reference

https://www.youtube.com/watch?v=awRtgpRsdTQ&ab_channel=Rocketseat