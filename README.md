<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->
# Table Of Contents
- [Motivations for the site](#motivations-for-the-site)
- [Information about the site](#information-about-the-site)
- [Information about my note-taking worflow](#information-about-my-note-taking-worflow)
- [Special thanks and acknowledgments](#special-thanks-and-acknowledgments)
- [Software and pages that were incredibly useful](#software-and-pages-that-were-incredibly-useful)
- [Workflows](#workflows)
   * [`dev` branch](#dev-branch)
      + [Steps for `dev` branch](#steps-for-dev-branch)
   * [`main` branch](#main-branch)
      + [Steps for adding new notes to `main` branch](#steps-for-adding-new-notes-to-main-branch)
      + [Steps for editing existing notes/content in `main` branch](#steps-for-editing-existing-notescontent-in-main-branch)
- [TODOs](#todos)

<!-- TOC end -->

<!-- TOC --><a name="motivations-for-the-site"></a>
# Motivations for the site
I wanted a website not only to display my projects, but also to store all my notes and share them with other people.

As my graduation approaches, I realize that I have a lot of gaps in my knowledge, so a majority of the notes are from revisited topics/courses from school that I made in order to fill in those gaps.

<!-- TOC --><a name="information-about-the-site"></a>
# Information about the site
The site was built using [Hugo](https://gohugo.io/) and [tailwindcss](https://tailwindcss.com/).

Although most of the site was coded by me, I drew inspiration from several sources for things like the [linear gradient background](https://github.com/bjtn1/bjtnoguera/blob/main/layouts/partials/bg-linear-gradient.html), which are all properly credited in the appropriate file(s) in which they were used.

<!-- TOC --><a name="information-about-my-note-taking-worflow"></a>
# Information about my note-taking worflow
I use [neovim](https://github.com/neovim/neovim) as my text editor for coding and taking notes in LaTeX.
TODO: Add a bit more information on how i take notes with neovim

<!-- TOC --><a name="special-thanks-and-acknowledgments"></a>
# Special thanks and acknowledgments
Special thanks to [Elijan J. Mastnak](https://www.ejmastnak.com/) for his incredibly easy to understand [guide on using vim-tex, luasnip, and neovim for note taking](https://www.ejmastnak.com/tutorials/vim-latex/intro/) -- the repository for [his personal website](https://github.com/ejmastnak/ejmastnak.com) was also incredibly useful in understanding how to set up my own Hugo site.

<!-- TOC --><a name="software-and-pages-that-were-incredibly-useful"></a>
# Software and pages that were incredibly useful
In no particular order...
- https://deeditor.com/ for re-coloring all the `.svg` logos/icons you see in the homepage
- https://www.svgrepo.com/ for all the `.svg` icons/logos you see in the homepage
- The entire [tailwindcss documentation](https://tailwindcss.com/docs/installation)

<!-- TOC --><a name="workflows"></a>
# Workflows
I write these for myself because I tend to forget things.

<!-- TOC --><a name="dev-branch"></a>
## `dev` branch
`dev` is the branch in which I develop enhancements and fix bugs for the site. `dev`'s baseURL should always be set to `example.com` or whatever the default is whenever you run `hugo new site ...`
<!-- TOC --><a name="steps-for-dev-branch"></a>
### Steps for `dev` branch
1. Make sure to have 3 terminal tabs open or panes if you're using [tmux](https://github.com/tmux/tmux/wiki)
2. `cd` into the website's folder
3. Make sure youre in `dev`
```console
git switch dev
```

4. Run this command in one of those panes 
```console
npx tailwindcss -i ./assets/css/style.css -o ./assets/css/tailwind.css --watch
```
> 💡  This makes i so that any css changes you make while in `dev` will be visible immediately on the site

5. Run this command in a different pane
```console
hugo server -D
```
> 💡 This enables LiveReload so you can see changes on the site as you make them

6. Start neovim and make the changes you need
7. Once happy with the changes made, commit and push them to `origin/dev`

<!-- TOC --><a name="main-branch"></a>
## `main` branch
`main` is the branch in which I add my `.pdf` and `.tex` and `.md` files to.

In other words, `main` is the "content" branch because only content-related changes go there.

`main`'s baseURL should always be set to `https://bjtn1/github.io/bjtnoguera` for GitHub Actions to be able to deploy it and have all links work within the website

<!-- TOC --><a name="steps-for-adding-new-notes-to-main-branch"></a>
### Steps for adding new notes to `main` branch
1. `cd` into website's folder
2. Make sure you're in `main`
3. Run this command
```console
hugo new content notes/<course_name>/index.md
```
> 💡 This adds a new course folder named `<course_name>` where you can start adding `.pdf` and `.tex` files as well as any other supplementary files related to the course

4. Star neovim and make the additions you need
5. Once happy with the changes made, commit and push them to `origin/main`

<!-- TOC --><a name="steps-for-editing-existing-notescontent-in-main-branch"></a>
### Steps for editing existing notes/content in `main` branch
1. `cd` into website's folder
2. Make sure you're in `main`
```console
git switch main
```
3. Start neovim and begin editing the content you need
4. Once happy with the changes made, commit and push them to `origin/main`

<!-- TOC --><a name="todos"></a>
# TODOs
- [ ] Add a bit more information on how i take notes with neovim [Information about my note-taking worflow](#information-about-my-note-taking-worflow)
- [ ] How to get math to render in html? (Do I need to install and download KaTeX?)
- [ ] Integrate [pagefind](https://pagefind.app/docs/) into the search bar
- [ ] Look into allowing users to turn off the moving linear gradient I added (turning it off means they would see the tokyongiht bakground I had before)
- [x] ~~Find a way to link tailwindcss to `./layouts/partials/head.html`'s link tag for css~~
- [x] ~~Get menu to stay in the left side position that it currently is for every page (position: absolute?)~~
- [x] ~~Look into how to get the middle section of single pages to be scrollable, but the left and right section stay in place~~
- [x] ~~Create and style a right menu for single pages where the headings of the current page will be linked (like that thing docusaurus and hugo do)~~
- [x] ~~The tailwindcss trick to get change prose colors doesn't seem to work, figure out why and how to fix it~~
- [x] ~~Also noticing that the footer seems to be stuck to the bottom of single pages, figure out a better way to get the footer to cooperate and stay where it should be~~

