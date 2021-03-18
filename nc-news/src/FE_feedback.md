# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

- The above is something you can do once you're finished with this - clear out the existing readme and create your own

## UX

- ✅ Basic styling added
- ✅ Responsive design
  - Only the topic buttons that overlap their container a little when shrinking the page
- ✅ Items aligned
- ✅ Content legible (not too wide, obstructed, etc)
- ✅ Refreshing doesn’t cause an issue on sub-pages
- [✅] No errors in the console
  - Just a couple
    - `<body> cannot appear as a child of <div>`
      - This is a `body` tag in `App.js` causing this - as it it rendered inside the root div in `index.html`, you'll just need to change it to a `section` or `main` for example - you can keep the CSS className
    - `Each child in a list should have a unique "key" prop`
      - This is coming from your `Navbar` component
      - Just need to add a unique `key` prop to the `button` element returned from the `map`
- ✅ Votes / Posts / Deletions happen instantly _OR_ give user indication of loading
  - Currently unable to delete a comment by the logged in user but yoiu can return to this 👍

## Functionality

### Login

- ✅ Some indication of who is logged in
  - Nice! I might suggest it would be nice to be able to log back in after clicking `Logout`
    ✅ - Even if it just hardcodes `jessjelly` back in 👍

### Articles

- ✅ Serves all articles / top articles
- ✅ Can vote on articles
- ✅ Can vote a maximum of once in either direction per page load
- ✅ Votes are persistent when page is refreshed
- ✅ Topic pages load only relevant articles (especially when navigating from one topic page to another)
- ✅ Can sort articles by date created / comment_count / votes
  - Love the sort by drop down with asc and desc as separate buttons!
  - I think you may have reversed their purpose
    - asc sorts by descending and vice versa
      ✅ - Just need to swap the `value` attribute provided to each button 👍

### Individual Article / Comments

- ✅ Individual articles are served with comments
- ✅ Can vote on comments
- ✅ Can vote a maximum of once in either direction per page load
- ✅ Votes are persistent when page is refreshed
- ✅ Can post new comments, which are persistent
  - Very nice!
    ✅ - At the moment, posting a purely gibberish comment that's very long with no spaces messes with the styling
    ✅ - By default the text is wrapping at whitespaces so isn't breaking any words
    ✅- You can add a `word-break` CSS attribute to combat this 👍
- [ ] Can only delete comments of logged in user
- [ ] Deleted comments don’t re-appear on re-render/refresh
  - Just need to implement the deleting functionality 👍

### Additional functionality:

- [ ] sort comments by date created / votes
- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

- The above are optional extras of your back end is set up for it

## Error Handling

- [ ] Bad url

  - Currently renders the topic selector and a blank page if we go to a gibberish URL
  - You can pass a component as a child of `Router` in `App.js` with a prop of `default` which will handle this for us!

    - It will display this component of the current URL does not match any of the existing `path` props
    - Eg.

```js
<Router>
  <ArticlesList path="/" />
  <ArticlesList path="/articles" />
  <ArticlesList path="/articles/topics/:topic" />
  <IndividualArticle username={username} path="/articles/:article_id" />
  <IndividualArticle path="/articles/:article_id/comments" />
  <ErrorDisplayingComponent default />
</Router>
```

- [ ] Bad topic slug in url
- [ ] Bad article id in url
  - Similarly to above, if you have an error handling component it can be rendered in the result of an error from your back end
  - These errors are visible in the console so your back end is handling them correctly, just need to utilise those error messages now in the front end 👍
- [ ] Post comment: (No text in comment body / Can you post without logging in?)
  - We cannot post a comment without being logged in which is great!
  - We can however currently post a comment with an empty body
    - The `required` attribute is a usefule one to help with this 👍

## Code

- ✅ Well named components
  - Being quite picky - but I'd suggest that the name `Comments` is a little misleading as it is only responsible for rendering a single comment
    - Perhaps just `Comment` might be more appropriate 👍
- ✅ Functional components used where possible
- ✅ Components reused where possible (`Articles` / `Voter`...)
- ✅ Minimal state - don't hold derivable data in state
- ✅ Set state correctly, using previous state where possible
  - Passed a function to `this.setState` in `VoteUpdater` which is great
  - You might find this comes in handy again for implementing deleting comments 😀
- ✅ Handle asynchronicity clearly (i.e. isLoading pattern)
- ✅ Functions are DRY (`handleChange` for controlled components / api calls)
  - I might recommend extracting the function provided as your `onChange` event listener for clarity - just liek you have with `handleSubmit` 👍
- ✅ Use object destructuring where possible
  - Makes your code very readable when this is done 🤩
- ✅ Tidy? If not: ESLint / Prettier
  - Absolutely! Very clear to read!
- ✅ `node_modules` git ignored
- [ ] No `console.log`s / comments
  - Some comments left in but a _lot_ of console.logs
    - Just remember to remove them when you're done!
    - You can search for them all directory wide by using the VS Code search fearture 👍
    - There are also some unsused variables which you can clear away also 😀
- [ ] remove unnecessary files (e.g. App.test.js)
  - Again, something to head through when you're finished
    - Clear away any files that came with `create-react-app` that you don't make use of yourself

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Add integration tests with `cypress`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Use React Hooks
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes

- The above are some suggestions of features to implement if you would like to take this project further!

## General Comments

- Nice use of `axios.create` in your `api` file!
- I like how you've oragised each component into its own folder with the associated CSS file!
- I like your implementation of a `back` button!
  - One thing I might suggest is also having a link back to home
    - Pretty standard to apply this to the main heading of the page!
    - At the moment, when we navigate back, we only go as far back as the topics page but cannot return to home without changing the URL manually 😀
- Apologies if I've messed up your styling temporarily by adding the very long comments! You can always re-seed the database before carrying on 👍

Overall, well done Tomasz! 🎉
You should be very pleased with what you've achieved this week!
Just a few things left to implement
Please give me a shout if you have any questions about anything I've written! 😀
