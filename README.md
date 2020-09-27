Exercise.

2 points -> js/main.js with two global variables myState i myApp. Figure out a way to avoid globality. (Hint. Closures could help you)

    IN THIS CASE WE CAN CREATE AN OBJECT WITH THE  PROPERTIES myState AND myApp

2 points -> danceWorld() is a child function inside inicia() but its callable in a global scope. We can avoid this?

        IN THIS PONIT WE USED THE USE STRICT  AND DELETE THE GLOBAL VARIABLE.

3 points -> Deal with module dependencies. main.js use core.js and stopball.js depend on main.js. In ES6 we can use import/export sentences to deal with module dependency at a browser level. Is it work in your browser?

        WITH THIS IMPROVEMENT WE DELETE THE REFERENCE SCRIPTS TO STOPBALL AND CORE.JS IN INDEX.HTML AND ONLY HAVE THE ./dist/bundle.js BECAUSE THIS FILE START THE APP WHEN WE START THE WEBPACK.

3 points -> Using same import/export mechanism as stated in previous point if we use webpack how it simplifies our deployment?

    WE INSTALL THE WEBPACK WITH WEBPACK DEV SERVER TO START OUR APP.
