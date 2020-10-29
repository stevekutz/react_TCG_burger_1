// simply a FC used as a HOC to get props and return props children
// allows use to wrap adjacent JSX elements

const aux = (props) => props.children;

export default aux;