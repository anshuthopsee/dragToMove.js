# dragToMove.js

A tiny JavaScript library to make DOM elements dragable with mouse or touch.

##Usage

```javascript
import {dragToMove} from "dragToMove.js";

//Takes in two arguments
// 1. Main HTML element.
// 2. Child element inside the Main, on which the clicking and the dragging happens.
dragToMove(document.querySelector('div'), document.querySelector('.handle));
```

[Demo](https://anshuthopsee.github.io/dragToMove.js/docs/)
