Modern Grid System
This is flex-grid system for using optimized way to render any list or creating page with custom grid.

## Installation
```npm install --save modern-grid-system```


## Usage/Examples

```javascript
import { Grid } from 'modern-grid-system';

function App() {
    return (
        <Grid
            divideBy={[65, 35]}
            elements={[
                <CartList />,
                <CartCheckoutCard />,
            ]}
            gutterSpace={4}
        />
    )
}
```


## Props

1. divideBy: array of number
2. elements: array of elements
3. gutterSpace: number

## Usage

1. divideBy: Used to specify how grid should be divided with respect to 100% width. It will render elements in given percentage width
2. elements: array of elements for rendering elements based on division
3. gutterSpace: Space between elements 
