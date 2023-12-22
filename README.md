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

TODO
- [ ] Find a way to link tailwindcss to `./layouts/partials/head.html`'s link tag for css

# Software and pages that were incredibly useful (in no particular order)
- https://deeditor.com/
- https://www.svgrepo.com/
