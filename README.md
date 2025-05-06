# React Popup Modal

**React Popup Modal** is a lightweight and simple React component for displaying a modal window.

## Installation

Install the component via npm:

```bash
npm install react-popup-modal
```

## Usage

Here is an example of how to use the component in a React project:

```jsx
import React from "react"
import Modal from "@stanlito/react-popup-modal"
import "@stanlito/react-popup-modal/dist/react-popup-modal.css"

function App() {
	return (
		<div>
			<h1>Welcome</h1>
			<Modal message="This is a message inside the modal!" />
		</div>
	)
}

export default App
```

## Props

| Name      | Type     | Description                              | Required |
| --------- | -------- | ---------------------------------------- | -------- |
| `message` | `string` | The message to display inside the modal. | Yes      |

## Styles

The component includes default styles defined in `index.scss`. If you want to customize the styles, you can override the following CSS classes in your own CSS/SCSS file:

-   `.modal`: The main container of the modal.
-   `.modal-content`: The content of the modal.
-   `.close-button`: The button to close the modal.

Example of customization:

```scss
.modal {
	background-color: rgba(0, 0, 0, 0.8); // Custom background color
}

.modal-content {
	border-radius: 16px; // Custom rounded corners
}

.close-button {
	color: blue; // Custom close button color
}
```

## Development

To develop or modify this component, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/react-popup-modal.git
cd react-popup-modal
npm install
```

To run the project in development mode:

```bash
npm run dev
```

To build the library:

```bash
npm run build
```
