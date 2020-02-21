# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a UI library, created by Facebook, that is used in many ways to create user interfaces by bringing together multiple component modules that together comprise the whole application. React is way to build complex user interfaces independent of where the data is received and what ‘state’ it is in. This allows you to grow your applications on a massive scale. By compartmentalizing your code and data state into modules, your application becomes more predictable and easier to debug.

2. What does it mean to think in react?

    Thinking in React is referring to how you think about applications as you built them. This paradigm involves a process by which you break down your entire application into a hierarchy of components. You can break it down into smaller and smaller separate components which not only helps you keep everything organized, but helps you keep everything compartmentalized as well. This means that if something is “broken” within your application, you will be able to isolate and fix the problem a lot more efficiently and accurately.

3. Describe state.

    State is an object in React that stores property values that belong to the component containing it. State determines how a particular component will render which allows you to create components that are dynamic and interactive. Contrary to ‘props’, which are properties that get passed to the component, state is managed within the component itself.

4. Describe props.

    Props, or the properties object, in React is how data is passed around from one component to another. Props are passed into React components much like arguments are passed in to JS functions. They are passed into the components as JSX/HTML attributes.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are anything that affects something else outside of the scope of the function being executed. There are many types of side effects, some of which that need to be ‘cleaned up’ and some that do not. Several examples of side effects include fetching API data, timers, logging and manual DOM manipulation. In many cases we will need to sync side effects, especially when retrieving data from an API. In order to accomplish this we will use the React Effect hook which effectively takes in two parameters, a callback function and a dependency array. It is this second parameter which allows us to sync our side effects. By passing in a state variable to the dependency array, the Effect hook will trigger the callback function passed in as its first argument when the state of the variable in the dependency array changes. 