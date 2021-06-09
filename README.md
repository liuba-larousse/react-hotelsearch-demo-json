<!-- PROJECT LOGO -->
<br />

# Hello! 👩🏻‍🦰 🤙🏻

I am Liuba, a Front-End Developer working with React. I love to create awesome stuff with code.

---

<p align="center">
  <h2 align="center">Hotel Search React App (Learning Project)</h2>

  <p align="center">
<p align="center">
    <a href="https://react-hotelsearch-demo-app.netlify.app/">View Demo</a>
    ·
    <a href="https://codesandbox.io/s/determined-poitras-2iytu">View Sandbox</a>
    ·
     <a href="https://github.com/liuba-larousse/react-hotelsearch-demo-json/issues">Report Bug</a>
</p>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

<br>

![landing page](https://github.com/liuba-larousse/react-hotelsearch-demo-json/blob/dynamic-pages/hotelsearch-react-demo.png)

<!-- <div align="center">
<img src="https://res.cloudinary.com/liubalarousse/image/upload/v1623167167/for%20portfolio/hotelsearch-react-demo_nuoyne.png" width="75%" alt="landing page">
</div> -->

This project was built with intention of practicing and learning basic React skills. I used Material UI for the styling of repeating elements like typography fonts, cards, buttons. I used SCSS for layout and customized style of unique elements.
The project is inspired by my love for traveling and AirB
nb landing page design. The project consists of a hotel search landing page, which takes a list of hotels from API (or in this case JSON that I have created specifically for this project with a structure based on real API JSON structure) and displays the information about each hotel on the landing page.
Hotels can be sorted by few parameters like price, rating, and reviews based on the data, that is stored in JSON objects related to each hotel. When a particular hotel is clicked, a dynamic page is created for it with the display of more detailed information about the hotel.

## Stack

<!-- This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples. -->

- 🧱 [React](https://reactjs.org/)
- 🎨 [Material UI](https://material-ui.com/)
- 🎨 [SCSS](https://sass-lang.com/)

- 🚀 [Netlify](https://www.netlify.com/)

<!-- GETTING STARTED -->

## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. -->

```
#make sure you have npm installed
npm install npm@latest -g

#Clone the repo
gh repo clone liuba-larousse/react-hotelsearch-demo-json

#Install NPM packages
npm install

#Start project
npm start
```

<!-- USAGE EXAMPLES -->

<!-- ## Usage -->

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<!-- FEATURES-->

## Features

- ✅ React Context
- ✅ React Hooks

  - ⭐ useState
  - ⭐ useEffect
  - ⭐ Custom GetData Hook

- ✅ React Router

  - ⭐ useParams
  - ⭐ useHistory
  - ⭐ Dynamic Routes

- ✅ Responsive

  - ⭐ @media query

- ✅ Date picker

- ✅ Material UI
  - ⭐ ThemeProvider and Theme customization
  - ⭐ Typography, Cards, Buttons, Links
  - ⭐ Icons

<!-- LEARNINGS -->

### Learnings

💡 📖 See what I have [LEARNED](https://github.com/liuba-larousse/react-hotelsearch-demo-json/blob/dynamic-pages/LEARNINGS.md) building this project.

<details><summary>Toggle to see learnings here</summary>

Here are some things I learned while building this website:

<br>

🌴 Topic

🥥 Tip to remember

🌿 Better code practice

📖 Reading resourses

<br>

### React

- 🌴 REACT ROUTER
  - 🥥 `history.push("./yourpage")` used inside of button as link to another page
  - 🥥 Place dynamic route before other routes. If placed under other routes dynamic route does not work.

```
   <Route path="/page/:pageId">
      <DynamicPage />
           </Route>
   <Route path="/">
            <Home/>
           </Route>
```

- 🥥 To create a dynamic route for each page use following steps

  - Pass unique value inside the Link to dynamic page
    ` <Link to={ "page/" + page.id }`
  - Wrap `<Page/>` component in the `<Route path="/page/:pageId">`
  - Use `useParams()` to get params `const params = useParams()`
  - Map thhrough the array of objects and find object that matched with pageId passed value in route params
  - Dont forget ❗ to `parseInt(params.pageId)` as params.pageId will be returned as a string

    ```
    const selectedPage = pages.find((page) => {
    return page.id === parseInt(params.pageId);
    });
    ```

  - 📖 More on creating dynamic routes [here](https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm)

 <br>

- 🌴 CONTEXT

  - 🥥 Wrap context provider around parent element, inside which children elements will be rendered. In this case inside `index.js` `<DataProvider><App /></DataProvider>`

  - 🥥🌿 Create Custom Hook within the context.

    ```
    function useData() {
    if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
    }
    return useContext(DataContext);
    }
    ```

    If there is no value, then we throw a helpful error message indicating that the hook is not being called within a function component that is rendered. 📖Read more [here](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

<br>

- 🌴 FETCHING DATA

  - 🥥 Use `async` function when fetching data from API or JSON within `context.js`.
  - 📖 Read about fetching Hooks [here](https://www.robinwieruch.de/react-hooks-fetch-data).
  - 📖 Read about rendering data from JSN [here](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app) and [here](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app)
  - 🥥 Use `try/catch` syntax to fetch the data.
  - 📖 See try/catch use example [here](https://www.w3schools.com/java/java_try_catch.asp)

<br>

- 🥥 JSON file has to be placed in `public/` folder

- 🥥 OG meta tags are placed in the head of index.html file in `public/` folder

  ```
  <meta property="og:image" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:url" content="..." />
  ```

- 🥥 To remove Link native styling use ` <Link style={{ textDecoration: "none" }} >`

- 🥥 Use `array.sort()` function to sort array of objects by values provided.

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

  - 📖 More about sorting arrays by property values [here](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/)

   <br>

## Material UI

- 🥥🌿 In `<Typography/>` element always specify

  - Variant applies the theme typography styles
  - Component used for the root node

- 🥥🌿 In `<InputBase/>` element arial-label can be specified as input pros `inputProps={{ "aria-label": "search airbnb" }}`

- 🥥🌿 In `<Icon>` element use`aria-label` native prop

- 🥥 `<Avatar/>` element easy to use to create user Avatars

- 🥥 To CHANGE THEME colors

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

- 🥥 Center backround image with css:

  ```
  background: url("https://images.photo.jpg") center center;
  background-size: cover;
  background-repeat: no-repeat;
  ```

- 🥥 Use `object-fit: contain` for image to maintain its aspect ratio while fitting within the element’s content box

- 🥥 Grow/Shrink animation on hover with scss:

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

- 🥥 In `package.json` add`"homepage": "./"`
- 🥥 In `netfily,toml` add `[build] publish = "build/"`
- 🥥 In Deploy Settings:
  - ` Build command:` `CI= npm run build`
  - ` Publish directory:` `build/`

<br>

## Other

- 🌴 README

  - 🥥 It was my first time trying to write proper clean nice `README.md`. I found it helpful to use some [templates](https://awesomeopensource.com/projects/readme)
  - 🥥 I used 🔗[markdown guide](https://www.markdownguide.org/basic-syntax/) source to learn more about basic Markdown synax.
  - 🥥 [Markdownify](https://markdownify.js.org/) is a Markdowneditor for desktop. It was of a huge help for writing syntax and preview it on desktop before pushing the code.
  - My `Readme.md` was created based on 🔗[this template](https://github.com/othneildrew/Best-README-Template).
    Thank you @othneildrew for sharing a template.
  - And here is a huge 🔗[List](https://github.com/matiassingers/awesome-readme) of many open sourse README templates can be used to help create your own awesome readme

   <br>

- 🌴 STORAGE
- 🥥 I use 🔗[Cloudinary](https://cloudinary.com/) for an easy storage of media files online.

</details>

## Contact

I am actively looking for a Junior Front End Developer position. Contact me if you think I can be a great addition for your organization or you just want to talk code.

<a href="mailto:liubovkapitulskaya@gmail.com?"><img src="https://img.shields.io/badge/gmail-%23DD0031.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a>

<!-- ISSUES -->

## Issues

Report any [issues](https://github.com/liuba-larousse/react-hotelsearch-demo-json/issues) with the project.

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request -->

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgments

- Project build based on tutorials with [Clever Programmer](https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQt)
- [React Date Range ](https://github.com/hypeserver/react-date-range#readme)
- [Electron Markdownify](https://github.com/amitmerchant1990/electron-markdownify#readme)
