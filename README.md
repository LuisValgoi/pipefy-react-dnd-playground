# Object
To copy the pipefy user interface to use the `react-drag-and-drop`.

# Dependencies / Tooling

- `cra`: to create the project.

- `styled-components`: to style the components.

- `react-icons`: to use icons in the app (includes material-icons, font-awesome, ionicals, etc).

# Notes CSS

- `box-sizing: border-box;`: to not extrapolate the element's height and width.

- `avatars.adorable.io`: to create sample avatars.

- `flex: 0 0 320px;`: combination of `flex-grow` + `flex-shrink` + `flex-basis`.

- `flex-grow`: the ability to grow amoung their "brothers". Value 0: uses the fixed width.

- `flex-shrink`: the ability to shrink once the screen is small. Value 0: uses the fixed width.

- `flex-basis`: determines the base width or height of the element. Width: once `d-flex-row`. Height: once `d-flex-column`.

- ` & + div {...}`: css selector which gets all the `div` which has a prev `div`.

# Notes Arquitetura

- `Create a new or keep in the same component?`: when we picture that that POC can be decoupled from the rest of the app, then we create (or, when it works separately).

- `import { Container } from './styles'`: to embed the div and the style of your component.

# Fonts Used

- [roboto](https://fonts.google.com/specimen/Roboto)

# Reference

https://www.youtube.com/watch?v=awRtgpRsdTQ&ab_channel=Rocketseat