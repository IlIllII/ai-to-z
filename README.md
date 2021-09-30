# ai-to-z

This is my personal rendition of the Webby award-winning [A to Z of AI](https://atozofai.withgoogle.com/intl/en-US/). Its not perfect, but I learned a lot by trying to clone this site.

For the full experience you can visit the [site](https://ai-to-z.herokuapp.com/), but here is a small sample of what it looks like:

![ai-to-z-capture](https://user-images.githubusercontent.com/78166995/135475072-ef6dc8dd-d36d-457c-aa07-5230392bf343.PNG)

If I were to do it again, the main thing I would change is I would make each content page modular instead of hand coding them. I thought it would be easier to hand code them, but since there are 26 pages it turned out to be a lot more work than just taking a smarter approach from the start, although it did provide more practice reps. It took me about four hours to code all the pages how I did them, when it would have taken probably 30 minutes if I had made a reusable view. Plus, I would be able to then easily update the site if I had based the content on a view. There were also some smaller opportunities to put redundant elements into individual components. If I was going to maintain this site going forward I would refactor the whole thing and probably use a global stylesheet rather than scoped css for every page.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
