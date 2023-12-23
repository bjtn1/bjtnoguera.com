We're using tailwindcss 

mkae sure youre in the root of the site's folder before you run this

```console
npx tailwindcss -i ./assets/css/style.css -o ./assets/css/tailwind.css
```

to run it continuoously (to see the changes on liveReload) add the `--watch` flag at the end of the above command
```console
npx tailwindcss -i ./assets/css/style.css -o ./assets/css/tailwind.css --watch
```

Running it continuosuly means that your terminal will be unusable while tailwindcss its running on wwatch mode, so run that command in a different
instance/tab of your terminal



This compiles all the tailwindcss classes code from any and all html files into tailwind.css

# Takeaways
- Math doesn't seem to work/get rendered in single pages, do I need to use KaTeX?
- As long as any one sentence isn't hundred of characters long, the menu on the left should stay exactly where it should be
    - Perhaps I should loook into setting the position of that menu as an absolute since I actually like that it stays in the same
    position in every page

# TODO
- [ ] Find a way to link tailwindcss to `./layouts/partials/head.html`'s link tag for css
- [ ] How to get math to render in html? (Do I need to install and download KaTeX?)
- [ ] Get menu to stay in the left side position that it currently is for every page (position: absolute?)
- [ ] Look into how to get the middle section of single pages to be scrollable, but the left and right section stay in place
- [ ] Create and style a right menu for single pages where the headings of the current page will be linked (like that thing docusaurus and hugo do)
- [x] ~~The tailwindcss trick to get change prose colors doesn't seem to work, figure out why and how to fix it~~
- [ ] Integrate [pagefind](https://pagefind.app/docs/) into the search bar
- [x] ~~Also noticing that the footer seems to be stuck to the bottom of single pages, figure out a better way to get the footer to cooperate and stay where it should be~~
- [ ] Look into allowing users to turn off the moving linear gradient I added (turning it off means they would see the tokyongiht bakground I had before)

# Software and pages that were incredibly useful (in no particular order)
- https://deeditor.com/
- https://www.svgrepo.com/
- The entire tailwindcss documentation https://tailwindcss.com/docs/installation
- https://github.com/ejmastnak/ejmastnak.com
