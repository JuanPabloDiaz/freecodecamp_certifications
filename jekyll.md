# Jekyll

## My Favorite Jekyll Themes

- [Cayman](https://pages-themes.github.io/cayman/) is a simple and very easy to use theme for GitHub Pages.
  > `theme: jekyll-theme-cayman`
- [Architect](https://pages-themes.github.io/architect/) is as easy as cayman.
  > `theme: jekyll-theme-architect`
- [Minima](https://github.com/jekyll/minima) is a minimalist theme for Jekyll. It is the `default theme for this repository`.
  > `theme: minima`
- [So Simple](https://github.com/mmistakes/so-simple-theme)
  > `theme: so-simple-theme`
- [Hyde](https://github.com/poole/hyde)

### References:

- [northernbug.github.io](https://github.com/NorthernBUG/northernbug.github.io)
- [rakaar.github.io](https://rakaar.github.io)
- [rafibayer.com](https://github.com/rafibayer/rafibayer.github.io)

## How to Use it locally

> Visit my post on [How to use run jekyll locally](https://docs.jpdiaz.dev/posts/run-jekyll-localhost/) for more details.

- Ensure you have Ruby, Bundler, and Jekyll installed. `gem install bundler jekyll`
- Ensure you have a `_config.yml` and `Gemfile` files already configured (in the root of your project).
- Update the bundle: `bundle update`
- Run the server: `bundle exec jekyll serve`
- Open your browser and navigate to `http://localhost:4000`
- To build the site, run `bundle exec jekyll build`

If there is an **error** related to the `node.js` or `javascript` folders in the repo when running on local. A work around is to comment out the those folders in the `_config.yml` file:

```yml
# Exclude directories containing Node.js/JavaScript projects from the build
exclude:
  - FullStackDeveloper/FrontEndLibraries/ReactFundamentals/
  - LegacyJavaScriptAlgorithmsAndDataStructures/
  - JavaScriptAlgorithmsAndDataStructures/
# ... any other directories containing Node.js/JavaScript projects
```

> Note: make sure to uncomment them when you are ready to deploy the site.

#### Run as Local with Auto-Reload

```sh
    bundle exec jekyll serve --livereload
```
