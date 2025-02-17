Episode 7

-- useEffect(() => {}, []);

- if there is no dependency array then useEffect will be called on every render
- if dependency array is empty then useEffect will be called only on initial render (just once)
- if dependency array contains [btnName], then useEffect will be called only when it encounter any changes in the btnName variable

- never declare a useEffect outside the component
- try to declare them at the top of the component
- never declare it inside condition, loops, or function => create inconsistencies

-- routes in react

- react-router-dom npm package that manages the routing
- createBrowserRouter and RouterProvider are two function using which routes are created
- This is how you create the routes => const appRouter = createBrowserRouter([{ path: "/", element: <AppLayout /> errorElement: <Error/>}])
  root.render(<RouterProvider router={appRouter} />);

-- react-router-dom also provide a hook (useRouteError) which gives additional information about the error

-- children routes

- moving on to a different page our header should be intact to every page
- using outlet component provided by react-router-dom, by which you can render any page as per the condition or the routes
- see the code in the body component for more information

-- linking pages with the bottons

- one possible way is to use anchor tag and put the url in the href => Do not use it not recommended as it will load whole page again
- instead use Link which is another superPower given by react-router-dom
- syntax same as anchor tag <Link to="path"><Link/>
- Link will not re-render whole page
- this is why react is called as single page application as you can render components in a single page and user feels like this is the new page
- client side routing => all the code is available when you load your page for the first time and when you click on about us it just render another component

-- making the cards dynamic => if we click on the cards then it should render the restaurantMenu component which contains details about the restaurant

- route /restaurant/redId => resId is dynamic associated with the card's id
- useParams a hook provided by react-router-dom => to extract resId from the url
- we have modified the backend mockdata and created a route which gives the details of the restaurant according to the restaurant id
- still it is single page application, we are only rendering the body case wise
- if you see the html in browser's console => you will not see Link tag, instead there will be anchor tag
- link is wrapper above anchor tag => react-router-dom keep an eye on link tag and do not reload whole page
- behind the scene link uses anchor tag

-- I have made few changes for the intern project, like now in this we are fetching data from live swiggy API.

## Autodesk Internship Project

-- RESTAURANT API = https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.54049434254868&lng=73.94665578842162&page_type=DESKTOP_WEB_LISTING

-- MENU API = https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=618037&catalog_qa=undefined&submitAction=ENTER
-- Use the above API to fetch restaurant menu using unique restaurantId

-- New Thin n Crispy Pizzas (6) => list?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards array of objects

-- we only did for combo category -> try to do it for other as well from REGULAR we should iterate over the cards and same for all.....

## Episode - 8 (Lets get classy!! -> Class Based Components)

- Class based components are class that extends React.Component class and contains a render method which return some piece of jsx just like functional components
- You can pass props in the same way you do for functional components. Constructor will help in receiving the props in class based components
- Loading class based component means creating an instance of class, when you create an instance then constructor is invoked, so that is good place to receive props and to create state variables
- Create state variable inside constructor like this
  this.state = {
  count: 0,
  count2: 2,
  };
- Update state variable like this
  this.setState({
  count: this.state.count + 1,
  });
- When a class based component is mounted or rendered or loaded, first constructor is called then render() method is called.

- If we have parent and child to be class based component then order of execution will be
  Parent constructor -> Parent render -> Child constructor -> Child render -> Parent Component Did Mount -> Child Component Did Mount
- completeDidMount() method exist in class based component, which is called or triggered when the component has been mounted. It is used to make API calls

- react lifecycle
  -> constructor -> render -> React updates DOM and refs -> componentDidMount

- if parent component has 2 or more child then this is how code will execute
  Parent constructor

  Parent render

  First constructor
  First render

  Second constructor
  Second render

  DOM Updated in Single Batch

  First componentDidMount
  Second componentDidMount

  Parent componentDidMount

- React batches the rendering for optimization
- class based component also has componentWillUnmount() method, which will be called when the component is unmounted from the page
- Earlier developer used this class based component approached, now we generally use functional components because its simple

- Never ever compare functional components and class based component they are completely different. Do not compare react lifecycle with functional components. UseEffect and componentDidMount is not similar

- In functional component if you want to clean up something similar to what we do inside componentWillUnmount() method in class based component then you can do that by returning a function from useEffect()

useEffect(() => {
setInterval(() => {
console.log("NAMASTE REACT OP");
},1000);

return () => {
// In this place you can cleanup things, this will be triggered after you leave the page
}
})

## Episode - 9 ( Optimizing our app )

- We should not write the logic of fetching the data from an API inside the react component, instead we will use custom hook which will fetch the data and we will only call that hook from the react component

  - more readable
  - maintainable
  - easy for testing
    Example - useRestaurantMenu custom hook

- If you got the data from the customHook and every time when you set state variable like setrestaurantList(data) or setfilterRestaurantList(data), React triggers a re-render of the Body component. We should not directly above statement inside any component. Instead we should use useEffect, so that I will run only once

- added useOnlineStatus custom hook
- Its not mandatory to use "use" in custom hook or component should start with capital letter but its recommended to do so.

# Lazy loading

- Code splitting/Chunking/Dynamic Bundling/Lazy Loading/On Demand Loading/Dynamic Import used when your app grows large
- const Grocery = lazy(() => import("file_path"));
- where ever you want to render the Grocery component wrap it inside Suspense tag
- Fallback content will be shown until the grocery bundle is fetched. You can write any piece of jsx in fallback.
- We have not done this in this project because we are focusing more on developing this faster
  <Suspense fallback={<h1>Loading...<h1/>}>
  <Grocery/>
  <Suspense/>

## Episode - 10 (Tailwind CSS)

- Explore popular library/framework for CSS -> SCSS, SASS, Bootstrap, MUI, styled-component, chakra UI, Ant Design
- Tailwind Css work with everything like react, angular, normal HTML.....
- Configuring tailwind css
  Step1 - npm install tailwindcss @tailwindcss/postcss
  Step2 - Create a .postcssrc file in your project root, and enable the @tailwindcss/postcss plugin.
  {
  "plugins": {
  "@tailwindcss/postcss": {}
  }
  }
  Step3 - Create a ./src/index.css file and add an @import for Tailwind CSS.
  @import "tailwindcss";
  Step4 - Start using the tailwind css in your application

- Initially there is a learning curve but you will find it very useful once you start getting the classname.
- Always remember to exclude node_modules from tailwind detector other you will get too many errors. Just put node_modules inside .gitignore file. (Wasted an hour on this)

p -> padding, m -> margin, w -> width, h -> height
px -> padding in left and right
pr, pl, pt, pb -> right, left, top, bottom

Disadvantages of Tailwind CSS

- Sometime the code looks ugly if you apply large of classes
- Initial learning curve

Advantages of Tailwind CSS

- Faster development
- You don't have to switch between files
- Parcel will only make bundle of CSS classes which are used in the project not for all
- It is very lightweight

## Episode - 11

- Higher Order component is used to enhance the component, they do not change anything in the component, they just add few things according to the data
- We have used HOC for open label in the RestaurantCards
- Data Management is very important and useful

- React Developer tool extension is so useful, you can see the Virtual DOM and data layer together, this can be very useful in debugging.

- If user clicks on one category then all other should be collapsed. This feature is got to implement. It requires the ItemList Component to be controlled component. Restaurant(parent) component should control it. We are modifying the state variable of parent from the child component by passing the set function as props.

- TODO - When you click on category it should collapse as well

## Props Drilling

Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

## React Context

- This is how you create context inside react
  import { createContext } from "react";

const UserContext = createContext({
loggedInUser: "Default User",
});

export default UserContext;

- This is how you can access the loggedInUser data anywhere in the application, useContext is a react hook
  const data = useContext(UserContext);

- One more interesting thing is this

  const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
  // Make an API call and send username and password
  const data = {
  name: "Saransh Meena",
  };
  setUserName(data.name);
  }, []);

  return (
  <div className="app">
  <UserContext.Provider value={{ loggedInUser: userName }}>
  <Header />
  </UserContext.Provider>
  <Outlet />
  {/_ This outlet will be replaced by other component like body, contact, about as per the routes conditions _/}
  </div>
  );
  };

- Here you are wrapping Header component inside UserContext.Provider with different loggedInUser value. Where ever you were using loggedInUser in Header, the value will be "Saransh Meena" and all the rest component will have loggedInUser value to be defaultUser

- For using react context inside class based component, the way to access the context data is a bit different. See online if you want to. Mostly functional components are used that's why I have not written that.
- if we pass setUserName function in the react context then we can actually modify the state of userName from anywhere in the code. We have tied state variable with context data.
- We can use context in large application but redux is popular in industries nowadays for scalability.

## Episode - 12 ( REDUX )

- Redux works in the data layer and it is not mandatory.
- Misconception
  Small scale project doesn't even need redux.
  Redux is a separate library from react.
  Redux is not the only library for state management
- Redux offers easy debugging -> Redux dev tools
- React-Redux is a bridge between react and redux toolkit(RTK)
- Redux toolkit is newer way of writing redux code

- Redux store is a very big javascript object which is kept in a Global central place.
- It is good to be keep all the data of the application in redux store? -> It is absolutely fine.
- We maintain logical partition inside the redux store to manage data efficiently
- We can't directly modify the store data. Then how can we store the data?
  WRITE: when we hit the add button from the menu items it should dispatches an action which calls the reducer functions which modifies the slice of our store.
  READ: Component can subscribe or sync to a particular slice and react will automatically update the UI as soon as data changes in that slice.

How to use Redux?

- npm i @reactjs/toolkit react-redux
- Build our store (appStore.js)
- Connect our store to our app (App.js)
- Slice(cartSlice) (cartSlice.js)
- Dispatch action (ItemList.js)
- Selector (Header.js)

- We should use redux carefully

// const store = useSelector((store) => store)
// const { cartItems } = store.cart;

// This above commented code is very inefficient, if you subscribe to the whole store then your cart component will be re-rendered whenever there will be any change to the store data object

- There is lot of things written in cartSlice.js regarding the management of the state.
- Redux Dev Tools chrome extension is very useful in debugging. It shows log of your actions. It also provide simulation of your actions. It is really helpful

-> Read about RTK query( a way of fetching data ) from the official website

## Food Ordering System

1. If user click on LOGO page should be directed to HOME
2. Make API call only once to load the data in the redux
3. Add Item/ Remove Item to and from CART is DONE
4. Add MENU in redux store -> Done
5. Add Footer -> Pending
6. Profile Section -> DONE
7. Protected Route -> DONE
8. Logout from Dropdown -> DONE