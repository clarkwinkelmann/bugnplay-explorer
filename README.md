# bugnplay-explorer

The bugnplay-explorer is a web application written using [React](https://facebook.github.io/react/) that allows you to browse the entire history of [bugnplay.ch](http://www.bugnplay.ch/) projects.

The data is crawled from [bugnplay.ch](http://www.bugnplay.ch/) projects listing through my [bugnplay-parser](https://github.com/clarkwinkelmann/bugnplay-parser), a second application written in PHP.

## For non-geeks

The goal for this project was to make use of nice technologies and manage the process from getting the data from the
[bugnplay.ch](http://www.bugnplay.ch/) website, store it, filter it, put it on a graph, apply colors depending on criteria, etc...
All automated of course !

The final product for a typical user is the web application hosted at <http://bugnplayexplorer.clarkwinkelmann.com/>.
There you can view all the bugnplay projects since the beginning of the contest.
You can use the checkboxes to change the way the data is displayed.

Each project is represented by a unique point on the graph and will move around when you change the settings.
You can hover it to get a quick overview and the link to its bugnplay minisite.

On the interface, you will find:

- Tabs
  - *Map*: display projects on a map of Switzerland based on the residence of the project leader (available for projects submitted from 2014 onwards)
  - *Stack*: display a column graph where projects are grouped by year. You can group them further by controlling the *highlight* type
- Highlight
  - *Just points*: each project is represented by a dot
  - *Group by age*: the color of the project dot reflects the age category (*Kids*, *Juniors*, *Seniors*)
  - *Group by category*: an icon will represent the category of the project (*Audio/Video*, *Web/Words/Games*, *Installation/Robotics*)
  - *Group by type*: an icon will represent the type of the project (*Independent*, *Classroom*, *Matu*)
- Filter
  - Choose which projects to display. Uncheck to hide all projects matching this option
  - The criteria are the same as for the highlight: *age*, *category* or *type*
- Technologies
  - Tags are given to projects based on the technologies they claim they use on the project page
  - *Any* means all projects are displayed without regard for the tags they have
  - If you uncheck it, you can choose the tags you want to show on the graph

## For geeks

### How it works

The projects are stored in the `projects.json` file. See the [bugnplay-parser](https://github.com/clarkwinkelmann/bugnplay-parser) README for more details on how is it made.

The whole application is a big React component that loads the JSON file using AJAX and displays the projects.

Each project has its own dot and is given an absolute position on the graph based on the current filter.
React takes care of updating the current view based on all the inputs.

### How to install

This repo is a simple Jekyll static website that is hosted on GitHub Pages.

You can simply download the source and run `jekyll build` inside the main directory.
The output will be in the `_site` folder.
[More information on Jekyll](https://jekyllrb.com/).

You cannot open the app directly in your browser.
You need a webserver in order for the AJAX call to work.
You can run `jekyll serve` in the main repo to launch the Jekyll development server.

## Contributing

If you have a suggestion or spotted a bug, open an Issue and I'll have a look :)

## License

The code is (c) 2016 Clark Winkelmann and is released under the [MIT License](LICENSE.txt)

The `projects.json` file contains unaltered public data crawled from [bugnplay.ch](http://www.bugnplay.ch/) with the [bugnplay-parser](https://github.com/clarkwinkelmann/bugnplay-parser)
