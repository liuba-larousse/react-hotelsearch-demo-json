Here are some things I learned while building this website:

<br>

π΄ Topic

π₯₯ Tip to remember

πΏ Better code practice

π Reading resources

<br>

## React

- π΄ REACT ROUTER
  - π₯₯ `history.push("./yourpage")` used inside of button as a link to another page
  - π₯₯ Place dynamic route before other routes. If placed under other routes dynamic route does not work.

```
   <Route path="/page/:pageId">
      <DynamicPage />
           </Route>
   <Route path="/">
            <Home/>
           </Route>
```

- π₯₯ Create a dynamic route for each page using the following steps

  - Pass unique value inside the Link to dynamic page
    ` <Link to={ "page/" + page.id }`
  - Wrap `<Page/>` component in the `<Route path="/page/:pageId">`
  - Use `useParams()` to get params `const params = useParams()`
  - Map through the array of objects and find an object that matched with pageId passed value in route params
  - Dont forget β to `parseInt(params.pageId)` as params.pageId will be returned as a string

    ```
    const selectedPage = pages.find((page) => {
    return page.id === parseInt(params.pageId);
    });
    ```

  - π More on creating dynamic routes [here](https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm)

 <br>

- π΄ CONTEXT

  - π₯₯ Wrap context provider around parent element, inside which children elements will be rendered. In this case inside `index.js` `<DataProvider><App /></DataProvider>`

  - π₯₯πΏ Create Custom Hook within the context.

    ```
    function useData() {
    if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
    }
    return useContext(DataContext);
    }
    ```

    If there is no value, then we throw a helpful error message indicating that the hook is not being called within a function component that is rendered. πRead more [here](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

<br>

- π΄ FETCHING DATA

  - π₯₯ Use `async` function when fetching data from API or JSON within `context.js`.
  - π Read about fetching Hooks [here](https://www.robinwieruch.de/react-hooks-fetch-data).
  - π Read about rendering data from JSN [here](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app) and [here](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app)
  - π₯₯ Use `try/catch` syntax to fetch the data.
  - π See try/catch use example [here](https://www.w3schools.com/java/java_try_catch.asp)

<br>

- π₯₯ JSON file has to be placed in `public/` folder

- π₯₯ OG meta tags are placed in the head of index.html file in `public/` folder

  ```
  <meta property="og:image" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:url" content="..." />
  ```

- π₯₯ To remove Link native styling use ` <Link style={{ textDecoration: "none" }} >`

- π₯₯ Use `array.sort()` function to sort array of objects by values provided.

  - use -1 : 1 to sort values in descending order
  - use 1 : -1 to sort values in ascending order

    ```
    function sortByReviews() {
    const sortedHotels = [...hotels].sort((a, b) =>
    a.guestReviews.total > b.guestReviews.total ? -1 : 1
    );
    return (
    sortedHotels
     );
     }
    ```

  - π More about sorting arrays by property values [here](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/)

   <br>

## Material UI

- π₯₯πΏ In `<Typography/>` element always specify

  - Variant applies the theme typography styles
  - A Component used for the root node

- π₯₯πΏ In `<InputBase/>` element arial-label can be specified as input pros `inputProps={{ "aria-label": "search airbnb" }}`

- π₯₯πΏ In `<Icon>` element use`aria-label` native prop

- π₯₯ `<Avatar/>` element easy to use to create user Avatars

- π₯₯ To CHANGE THEME colors

  - Wrap parent element in `<ThemeProvider theme={theme}/>`
  - Override new colors in theme inside the palette object

  ```
  const theme = createMuiTheme({
  palette: {
  primary: {
  main: "#f44336",
  contrastText: "#fff"
  },
  secondary: {
  main: "#ffc400",
  contrastText: "#000000"
  }}});
  ```

  <br>

## CSS

- π₯₯ Center background image with CSS:

  ```
  background: url("https://images.photo.jpg") center center;
  background-size: cover;
  background-repeat: no-repeat;
  ```

- π₯₯ Use `object-fit: contain` for the image to maintain its aspect ratio while fitting within the elementβs content-box

- π₯₯ Grow/Shrink animation on hover with SCSS:

  ```
      element: {
      width: 100,
      height: 100,
      transition: transform 0.15s ease-in-out,
      &:hover: {
      transform: scale3d(1.05, 1.05, 1)
      }}
  ```

   <br>

## Netlify

- π₯₯ In `package.json` add`"homepage": "./"`
- π₯₯ In `netfily,toml` add `[build] publish = "build/"`
- π₯₯ In Deploy Settings:
  - ` Build command:` `CI= npm run build`
  - ` Publish directory:` `build/`

<br>

## Other

- π΄ README

  - π₯₯ It was my first time trying to write properly `README.md` which would be cclean and nice. I found it helpful to use some [templates](https://awesomeopensource.com/projects/readme)
  - π₯₯ I used π[markdown guide](https://www.markdownguide.org/basic-syntax/) source to learn more about basic Markdown syntax.
  - π₯₯ [Markdownify](https://markdownify.js.org/) is a Markdown editor for desktop. It was helpful for writing syntax and preview it on the desktop before pushing the code.
  - My `Readme.md` was created based on π[this template](https://github.com/othneildrew/Best-README-Template).
    Thank you @othneildrew for sharing a template.
  - And here is a huge π[List](https://github.com/matiassingers/awesome-readme) of many open source README templates can be used to help create your own awesome readme

   <br>

- π΄ STORAGE
- π₯₯ I use π[Cloudinary](https://cloudinary.com/) for the easy storage of media files online.
