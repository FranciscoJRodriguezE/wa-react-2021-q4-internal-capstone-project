# Wizeline Academy - React Bootcamp 2021/Q4 Internal

## Introduction

Thank you for participating in the 2021 - Q4 React Bootcamp! Here you will find all the instructions to complete your **Capstone Project**.

The purpose of this project is for you to demonstrate your React skills. This is your chance to show off everything you have learned during this bootcamp!

You will build and deliver an entire React application on your own from scratch. The project is divided into weekly deliverables, in which you will apply the concepts learned in the assignments and live sessions. Each deliverable has its own information on what and how we expect you to deliver throughout the bootcamp.

We hope you find this project challenging and engaging!

## The Project

Create an Ecommerce Store where you can buy furniture and home decor items. It should have the following sections:

- Home Page
- Product List Page
- Product Detail Page
- Search Results Page
- Shopping Cart Page
- Checkout Page

We don’t want to limit you or bias your implementation by providing some demo application with a specific design, but instead, ask you to choose your own and build it from scratch. Here’s a link where you can find great ideas and inspiration for your UI design: https://dribbble.com/search/ecommerce

## Deliverables

We provide the delivery dates to plan accordingly; please take this project seriously and try to make progress constantly. If you are struggling with something or get stuck at some point, please schedule a mentoring session to get help on time. Feel free to use the slack channel available.

- [**Deliverable 1 - (Due Date: Monday, November 15th)**](#deliverable-1---due-date-monday-november-15th)
- [**Deliverable 2 - (Due Date: Monday, November 22nd)**](#deliverable-2---due-date-monday-november-22nd)
- [**Deliverable 3 - (Due Date: Monday, November 29th)**](#deliverable-3---due-date-monday-november-29th)
- [**Deliverable 4 - (Due Date: Monday, December 6th)**](#deliverable-4---due-date-monday-december-6th)
- **Final Deliverable - (Due Date: Monday, December 13th)**

## Deliverable 1 - (Due Date: Monday, November 15th)

**Related topics**: React Fundamentals & CSS Styles in React

In this assignment, you will create the initial version of your Ecommerce Store. It should contain the following:

- Home Page (prototype)

### Before you start

<ol>
  <li>Fork <a href="https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project">this repo</a> into your GitHub account
  <li>Please make sure that your new repo is publicly accessible 
  <li>Create a new branch with the name <b>“feat/deliverable1”</b> derived from <b>main</b> on your forked repository
  <li>Start working on the requirements specified below
</ol>

### Requirements

<ol>
  <li>
    Create the <b>UI layout</b> for your app, it should include the following elements:
    <ul>
      <li>1.1. A <b>Header</b> containing your Ecommerce Store logo/name, a search input, and a shopping cart icon. For now, all the elements in the header should be disabled, you only need to create the corresponding UI elements without the functionality.</li>
      <li>1.2. The <b>Content</b> view corresponding to the section that will be rendered (in this case, the Home Page)</li>
      <li>1.3. A <b>Footer</b> containing the message “Ecommerce created during Wizeline’s Academy React Bootcamp”</li>
    </ul>
  </li>
  <li>
    Create the <b>Home Page</b> including the following blocks:
    <ul>
      <li>2.1. A <b>Slider</b> to display the featured banners from <a href="https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/mocks/en-us/featured-banners.json">this mock file</a></li>
      <li>2.2. A <b>Carousel</b> or <b>Grid</b> of the product categories from <a href="https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/mocks/en-us/product-categories.json">this mock file</a></li>
      <li>2.3. A <b>Grid</b> of <b>Featured Products</b> from <a href="https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/mocks/en-us/featured-products.json">this mock file</a>. For each element on this grid, you should show at least the main image of the product, its name, category, and price.</li>
    </ul>
  </li>
</ol>

### Notes

- Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. Please don’t use any UI library such as Bootstrap or Material UI, we want you to create all of your styles from scratch using the styling techniques learned.
- Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphone, Tablet, Desktop).
- Please make sure that no warnings or errors are logged in the browser console

### Evaluation Criteria

- The Header is rendered correctly (25 points)
- The Featured Banners Slider is rendered correctly using the data from <a href="https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/mocks/en-us/featured-banners.json">the mock file</a> (20 points)
- The Categories Carousel/Grid is rendered correctly using the data from <a href="https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/mocks/en-us/product-categories.json">the mock file</a> (20 points)
- The Featured Products Grid is rendered correctly using the data from <a href="https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/mocks/en-us/featured-products.json">the mock file</a> (30 points)
- The Footer is rendered correctly (5 points)

### Bonus

- Unit Test to validate that the Ecommerce Store logo/name appears correctly in the Header. (10 points)

### Submitting your Deliverable

- Once you’ve covered all the <a href="#requirements">requirements specified above</a> and completed all the bullets on the <a href="#evaluation-criteria">Evaluation Criteria</a> section, push your changes to your branch and open a **PR** that can be merged into your **main** branch of your own GitHub repository.
- Deploy your app into a hosting service such as Netlify, Firebase, Heroku, GitHub Pages, etc.
- Fill <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3So94j4yoKcyPU1rDQvXweCdn59eoaGeD6tByPRgX_Osmnw/viewform">this Google Form</a> to submit your project before **November 15th at 8:00 AM (CST)**

## Deliverable 2 - (Due Date: Monday, November 22nd)

**Related topics:** React lifecycle & Hooks

In this assignment, you will continue working on your Ecommerce Store. It should contain the following:

- Home Page (prototype from previous deliverable)
- Product List Page (prototype)

### Before you start

<ol>
  <li>Merge your branch from the previous deliverable into main in your own GitHub repo</li>
  <li>Create a new branch with the name “feat/deliverable2” derived from main on your repo</li>
  <li>Read carefully all the instructions and notes for this deliverable</li>
  <li>Start working on the requirements specified below</li>
</ol>

### Requirements

1. Add a button with the text “View all products” below your Featured Products Grid on the Home Page.
2. Create a new component for your Product List that returns this React element for now: `<h1>This is the Product List Page</h1>`
3. Modify your App component to implement a conditional rendering logic to navigate through your pages. In this case, you will only need to be able to navigate from Home Page to Product List Page and from Product List Page to Home Page.
4. Add an event handler to your “View all products” button so you can navigate to your Product List Page when you click on it.
5. Test your conditional rendering logic to navigate to the Product List Page. After clicking on the “View all products” button, you should see the following message “This is the Product List Page” replacing the Home Page.
6. Add an event handler to your Ecommerce logo in the header so you can navigate to your Home Page when you click on it.
7. Test your conditional rendering logic to navigate to the Home Page. After clicking on the Ecommerce logo in the header, you should see your Home Page content, replacing the Product List Page.
8. Modify your Product List Page component to contain the following blocks:

- 8.1. A **Sidebar** (left or right side, is up to you), it should contain a list of categories from [this mock file](/mocks/en-us/product-categories.json). The elements in this list will work as filters for your products, so, you should render the name of each category and attach to it an empty handler for the onClick event.
- 8.2. A **Grid** of Products from [this mock file](/mocks/en-us/products.json). For each element on this grid, you should show at least the main image of the product, its name, category, and price.

9. Add an event handler to the categories in your sidebar, so when you click on each of them, the products in the grid are filtered. <b>The <span id="filtering-behavior">behavior</span> of this filters should be the following</b>:

- 9.1. By default each category filter should be disabled.
- 9.2. When you click on the category filter for the first time, that filter will be enabled and applied to the product grid.
- 9.3. When the filter is active/enabled, you should apply some styling to the selected category so it’s easier to distinguish between active and inactive states.
- 9.4. You can have multiple filters enabled at the same time, so when this happens, the products that will be shown in the grid should have at least one of the categories from the active filters.
- 9.5. To disable a filter, you will have to click on it and it should be removed from the active filters.

10. Add pagination controls to the bottom of your list. For now, you just need to create the UI for these elements, you don’t need to implement the pagination logic on your grid yet.

### Notes

- You won’t need to implement React Router library to navigate through your pages yet, you will only need to implement some conditional rendering logic to show the component for the page that you want to see.
- You should implement functional components with hooks
- Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. **Please don’t use any components library such as Bootstrap or Material UI.**
- We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!
- Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).
- Please make sure that no warnings or errors are logged in the browser console.

### Evaluation Criteria

- Navigation from Home Page to Product List Page works correctly (15 points)
- Navigation from Product List Page to Home Page works correctly (15 points)
- The Sidebar with the list of categories is rendered correctly using the data from [the mock file](/mocks/en-us/product-categories.json) (10 points)
- The Products Grid is rendered correctly using the data from [the mock file](/mocks/en-us/products.json) (25 points)
- Filtering behaviors are implemented correctly according to the requirements (30 points)
- Pagination controls are rendered correctly (5 points)

### Bonus

- Emulate loading state for the Products Grid. You should show a loader component immediately after you navigate to the Product List Page and 2 seconds after that, you should remove that loader and show all the products from the mock file (20 points)

### Submitting your Deliverable

- Once you’ve covered all the [requirements specified above](#requirements-1) and completed all the bullets on the [Evaluation Criteria](#evaluation-criteria-1) section, push your changes to your branch and **open a PR that can be merged into your main branch of your own GitHub repository**.
- Deploy your app into a hosting service such as Netlify, Firebase, Heroku, GitHub Pages, etc.
- Fill [this Google Form](https://docs.google.com/forms/d/e/1FAIpQLSc3So94j4yoKcyPU1rDQvXweCdn59eoaGeD6tByPRgX_Osmnw/viewform) to submit your project before **November 22nd at 8:00 AM (CST)**

## Deliverable 3 - (Due Date: Monday, November 29th)

**Related topics**: Fetching a Real API, React Router, Global State Management

In this assignment you will continue working on your Ecommerce Store. It should contain the following:

- Home Page (with API integration)
- Product List Page (with API integration)
- Product Detail Page (with API integration)
- Search Results Page (with API integration)

### Before you start

<ol>
  <li>Merge your branch from the previous deliverable into main in your own GitHub repo</li>
  <li>Create a new branch with the name “feat/deliverable3” derived from main on your repo</li>
  <li>Read carefully all the instructions and notes for this deliverable</li>
  <li>Start working on the requirements specified below</li>
</ol>

### Requirements

1. Refactor your App to use **React Router** to navigate across your pages. You should remove all the conditional rendering logic and update your “onClick” event handlers that you previously implemented so you can navigate through your pages using the React Router Link Component.

2. Update your **Home Page** according to the following requirements:

- 2.1. The route for this page should be **/** and **/home**
- 2.2. Refactor your **Featured Banners Slider** to fetch data from the API using [this custom hook](https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/src/utils/hooks/useFeaturedBanners.js).
- 2.3. Refactor your **Product Categories Carousel** or **Grid** according to the following requirements:
- 2.3.1. Fetch data from this endpoint:
  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30

  **IMPORTANT:** You have to replace the **{apiRef}** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.

- 2.3.2. Each category should have a link to the **Product List Page** including a query param in the URL to filter the products by that category.
- 2.4. Refactor your **Featured Products Grid** according to the following requirements:
- 2.4.1. Fetch data from this endpoint:
  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16

  **IMPORTANT:** You have to replace the **{apiRef}** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.

- 2.4.2. Each element on this grid should have at least the main image of the product, its name, category, price, “Add to cart” button, and a link to its detail page.
- 2.4.3. You should show 16 products maximum on this grid and it is not necessary to implement pagination controls.

3. Update your **Product List Page** according to the following requirements:

- 3.1. The route for this page should be **/products** and **/products?category={categorySlug}**
- 3.2. Refactor your Product Categories Sidebar according to the following requirements:
- 3.2.1. Fetch data from this endpoint:
  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30

  **IMPORTANT:** You have to replace the **{apiRef}** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.

- 3.2.2. You should be able to filter your products by category according to the category [filtering behavior from the previous deliverable](#filtering-behavior).
- 3.2.3. If there is a filter applied, you should show a “Clear filters” button that will remove all the active filters and update the grid to show all the products.
- 3.3. Refactor your **Products Grid** according to the following requirements:
- 3.3.1. Fetch data from this endpoint:
  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=12

  **IMPORTANT:** You have to replace the **{apiRef}** on the query params of the URL with the latest value for this particular API. Please check [the sample custom hook](https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.

- 3.3.2. Each element on this grid should have at least the main image of the product, its name, category, price, “Add to cart” button, and a link to its detail page.
- 3.3.3. Create the Pagination Controls dynamically, you should show 12 products maximum per page.

4. Create the **Product Detail Page** according to the following requirements:

- 4.1. The route for this page should be **/product/{productId}**
- 4.2. Fetch data for the selected product from this endpoint:
  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22{productId}%22%29+%5D%5D

  **IMPORTANT:** You have to replace the **{apiRef}** on the query params of the URL with the latest value for this particular API and **{productId}** with the id of the selected product. Please check [the sample custom hook](https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.

- 4.3. This page should include the following blocks:
- 4.3.1. A **Gallery** to display the images of the selected product. You can use [this library](https://codesandbox.io/s/modsk?file=/src/App.jsx) (or any other) and customize its appearance to match the look and feel of your application.
- 4.3.2. A **Label** to display the name of the selected product.
- 4.3.3. A **Label** to display the current price of the selected product.
- 4.3.4. A **Label** to display the SKU of the selected product.
- 4.3.5. A **Label** to display the category name of the selected product.
- 4.3.6. A **List of Labels** to display the tags of the selected product.
- 4.3.7. A **Paragraph** to display the description of the selected product.
- 4.3.8. A **Number Input** to select the number of items to be added to the cart.
- 4.3.9. An **Add to Cart Button**.
- 4.3.10. A **Table** or **List** to display the specs of the selected product.

5. Create the **Search Results Page** according to the following requirements:

- 5.1. The route for this page should be **/search?q={searchTerm}**
- 5.2. You can consume this endpoint to get the products matching your search term:
  https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref={apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22{searchTerm}%22)%5D%5D&lang=en-us&pageSize=20

  **IMPORTANT:** You have to replace the **{apiRef}** on the query params of the URL with the latest value for this particular API and **{searchTerm}** with the search term that the user entered. Please check [the sample custom hook](https://github.com/jparciga/wa-react-2021-q4-internal-capstone-project/blob/main/src/utils/hooks/useFeaturedBanners.js) so you can implement something similar to fetch from this endpoint.

- 5.3. This page should contain the following blocks:
- 5.3.1. A **List** to display the products that match your search term. For each element on this grid, you should show at least the main image of the product, its name, category, price, short description, and “Add to Cart” button.
- 5.3.2. **Pagination Controls** created dynamically to switch between results pages in case there are more than 20 search results.
- 5.3.3. A **Custom Message** that will be rendered only when there are no results matching the searchTerm.

6. Update your **Header** to include a search input and a button that after clicking on it, redirects to the **Search Results Page** for the search term that you entered.

### Notes

- You should implement functional components with hooks.
- Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. **Please don’t use any components library such as Bootstrap or Material UI.**
- We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!
- Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).
- Please make sure that no warnings or errors are logged in the browser console.
- You don’t have to implement the “Add to cart” logic yet.
- If you want to dive deeper into how to consume the REST API please check [the official documentation of the Prismic CMS](https://prismic.io/docs/technologies/rest-api-technical-reference) which is the platform that we’re using for this project.

### Evaluation Criteria

- Navigation to all pages (Home Page, Product Page, Product Detail Page, Search Results Page) works correctly using React Router (20 points)
- Featured Banners Slider, Product Categories Carousel/Grid, and Featured Products Grid on the Home Page are working correctly fetching data from the API (5 points)
- Product Category Sidebar on the Product List Page is filtering Products Grid correctly interacting with the API (25 points)
- Products List Grid is fetching data from the API and Pagination Controls are working correctly (15 points)
- Product Detail Page is fetching data correctly from the API for the selected product and all the required blocks are working properly (15 points)
- Search Results Page is connected to the search input in the header and is consuming the API to filter only the results that match the search term value from the query param (10 points)
- Pagination Controls and Custom Message in Search Results Page are generated dynamically and are working correctly (10 points)

### Bonus

- React Context and useReducer or Redux are implemented to manage the global state of your application (15 points)
- Abort Controller is implemented correctly for all your fetch requests (15 points)
- Loading indicator appears on all the components that consume an API (10 points)
- PropTypes are implemented correctly for all your components (10 points)

### Submitting your Deliverable

- Once you’ve covered all the requirements specified above and completed all the bullets on the Evaluation Criteria section, push your changes to your branch and open a PR that can be merged into your main branch of your own GitHub repository.
- Deploy your app into a hosting service such as Netlify, Firebase, Heroku, GitHub Pages, etc.
- Fill [this Google Form](https://docs.google.com/forms/d/e/1FAIpQLSc3So94j4yoKcyPU1rDQvXweCdn59eoaGeD6tByPRgX_Osmnw/viewform) to submit your project before **November 29th at 8:00 AM (CST)**

## Deliverable 4 - (Due Date: Monday, December 6th)

**Related topics:** React Router, Global State Management, Design Patterns, Best Practices & Performance Optimizations

In this assignment, you will continue working on your Ecommerce Store. It should contain the following:

- Product Detail Page (with “Add to Cart” functionality)
- Shopping Cart Page
- Checkout Page

### Before you start

1. Merge your branch from the previous deliverable into main in your own GitHub repo
2. Create a new branch with the name “feat/deliverable4” derived from main on your repo
3. Read carefully all the instructions and notes for this deliverable
4. Start working on the requirements specified below

### Requirements

1. If you don’t have it already, add a “Shopping Cart Icon” to your header. You can create this icon as a separate component so you can add the logic to display a badge with the number of items that you have added to your cart. This icon will also serve as a link to navigate to the “Shopping Cart Page” after clicking on it.
2. Modify the **Product Detail Page** according to the following requirements:

- 2.1. Implement the Add to Cart functionality for the selected product.
- 2.2. You should be able to add multiple items to your cart using the quantity selector. Please don’t forget to validate that you don’t exceed the stock units available for the selected product.
- 2.3. After clicking on the **“Add to Cart”** button the items should be added to your cart and the badge on the “Shopping Cart Icon” in the header should be updated to display the current quantity of items in the cart.
- 2.4. The **“Add to Cart”** button should be hidden or disabled when the **stock** units available for the selected product is zero. So you shouldn’t be able to add to cart a product that is not available in the stock.

3. Create the **Shopping Cart Page** according to the following requirements:

- 3.1. The route for this page should be **/cart**
- 3.2. This page should contain a table to display the items added to the cart and you should build it considering the following:
- 3.2.1. There should be a row in this table per item/product in the cart.
- 3.2.2. Each row should show the main image of the product, its name, unit price, a quantity selector, subtotal (unit price x quantity) and a “remove from cart icon”.
- 3.2.3. At the bottom of the table there should be a label to display the **cart total** (sum of the subtotal’s column in the table) and a **“Proceed to checkout”** button that will serve as a link to navigate to the “Checkout Page” after clicking on it.
- 3.2.4. You should be able to modify the quantity of items that you want using the quantity selector. Please don’t forget to validate that you don’t exceed the **stock** units available for the selected product.
- 3.2.5. After updating the quantity the subtotal for the product and the cart total labels should be updated.

4. Create the **Checkout Page** according to the following requirements:

- 4.1. The route for this page should be **/checkout**
- 4.2. This page should contain the following blocks:
- 4.2.1. A **Form** to capture the customer information for their order considering the following:
- 4.2.1.1. A text input to capture the name of the customer
- 4.2.1.2. A text input to capture the email of the customer
- 4.2.1.3. A text input to capture the post/zip code of the customer
- 4.2.1.4. A textarea to capture the order notes
- 4.2.2. An **order summary table** to display the items added to the cart and you should build it considering the following:
- 4.2.2.1. There should be a row in this table per item/product in the cart.
- 4.2.2.2. Each row should only show the name of the product, number of items added to cart and the subtotal (unit price x quantity).
- 4.2.2.3. At the bottom of the table there should be a label to display the **cart total** (sum of the subtotal’s column) and two buttons, one for **“Place order”** and the other for **“Go back to cart”**
- 4.2.3. You don’t have to implement the logic for the “Place order” button yet.
- 4.2.4. After clicking on the “Go back to cart” button, you should be able to navigate to the “Shopping Cart Page”.

### Notes

- You should implement functional components with hooks.
- Try to keep the use of third-party libraries to the minimum, especially the ones related to the topics covered in our bootcamp. **Please don’t use any components library such as Bootstrap or Material UI.**
- We want you to create all of your styles from scratch using the styling techniques learned, you can use any of the following styling approaches: Plain CSS with classnames, CSS pre-processors, CSS Modules, or CSS-in-JS (styled-components, emotion, or any other library), is totally up to you!
- Please make sure that your UI is responsive and all the elements adapt to different screen sizes (Smartphones, Tablet, and Desktop).
- Please make sure that no warnings or errors are logged in the browser console.

### Evaluation Criteria

- After clicking on the “Add to Cart” button on the Product Detail Page, the number of items selected are correctly added to the cart and the badge for the Shopping Cart Icon in the Header is updated correctly (25 points)
- The logic to update the quantity for a product on the “Shopping Cart Page” is implemented correctly (10 points)
- The logic to remove a product from the cart on the “Shopping Cart Page” is implemented correctly (10 points)
- The form on the “Checkout Page” is displayed correctly (10 points)
- The Order Summary table on the “Checkout Page” is displayed correctly (15 points)
- The “Add to Cart” functionality is implemented correctly using React Context or Redux across all pages (30 points)

### Bonus

- PropTypes are implemented correctly for all your components (10 points)
- Error Boundaries are applied correctly at least for 1 component within the app (15 points)
- useMemo and useCallback hooks are implemented correctly to improve performance if needed (20 points)

### Submitting your Deliverable

- Once you’ve covered all the requirements specified above and completed all the bullets on the Evaluation Criteria section, push your changes to your branch and **open a PR that can be merged into your main branch of your own GitHub repository.**
- Deploy your app into a hosting service such as Netlify, Firebase, Heroku, GitHub Pages, etc.
- Fill [this Google](https://docs.google.com/forms/d/e/1FAIpQLSc3So94j4yoKcyPU1rDQvXweCdn59eoaGeD6tByPRgX_Osmnw/viewform) Form to submit your project before **December 6th at 8:00 AM (CST)**
