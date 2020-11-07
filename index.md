# JavaScript Final Project

## Introduction
It's time to take your newly learned JavaScript skills and put them to good use! One of the best things about the Internet is that someone from one part of the world can write a program that someone thousands of miles away can use. Someone can share his or her story to someone across the world.

For the next couple of weeks, you're going to tell a story that you find interesting or that you're passionate about. You'll use the programming language of the web, JavaScript, to share that story.

## Project
Create a webpage that tells some story and use data visualization or interactivity to help tell that story.

## Example Project
[Insert link to Example here](jeremykao.github.io/mission-bit/final-project-example/index.html)

## Guidelines
- You can be as creative as you want
- The topic can be anything you're passionate about (e.g. education, animal welfare, racial inequality, etc.)
- You can begin the project by asking a question and then finding data to answer that question OR you can find an interesting dataset and see if you can come up with some insights from it.
- Feel free to ask if you need some help finding or retrieving data.
- You'll likely use Chart.js for data visualization.

# Helpful Tips

### Project Structure
You generally only need 3 files: 1 HTML file which link to a CSS file and a JavaScript file.

```
index.html
script.js - <script src="script.js>
styles.css - <link rel="stylesheet" href="styles.css">
```

### Include Chart.js
In `index.html`
```
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
```

# Helpful Links
## Chart JS
[Chart JS Website](https://www.chartjs.org/)

[Chart JS Documentation](https://www.chartjs.org/docs/latest/charts/bar.html) - Find what `configuration` you need to pass to `new Chart(context, configuration)` to create your chart

[Chart JS Samples](https://www.chartjs.org/samples/latest/) - Some samples of more advanced usage of ChartJs, such as tooltips, positioning, etc.). Use the Dev Tools Inspector to see the code.

## Data Sources

Education Datasets
- A lot of data all summarized into charts for you. Note: they use ChartJS too! http://www.ed-data.org/district/San-Francisco/San-Francisco-Unified
- If you want raw data files, here are some. Some of these are quite hard to use and require a lot of parsing. https://www.cde.ca.gov/ds/dd/
- Dataquest, which is a lot easier to find data with: https://data1.cde.ca.gov/dataquest/dqcensus/StfFteClassifiedLevels.aspx?cds=1964261&agglevel=District&year=2019-20
- Other datasets you can use related to Education: https://data1.cde.ca.gov/dataquest/DQReports.asp?CDSType=D&CDSCode=3810389

Other Datasets
- [Data.gov](https://www.data.gov/) - Data provided by the US Government
- [SF OpenData](https://datasf.org/opendata/) - A bunch of data that San Francisco collects
- [Kaggle](https://www.kaggle.com/search?q=tag%3A%22data+visualization%22+in%3Adatasets) - This site has a bunch of random datasets. People use this site for machine learning, AI, data visualization challenges.
- [Google Dataset Search](https://datasetsearch.research.google.com/) - Google has search built around finding datasets
- [Data is Plural](https://docs.google.com/spreadsheets/d/1wZhPLMCHKJvwOkP4juclhjFgqIY8fQFMemwKL2c64vk/edit#gid=0) - Data is Plural is a newsletter all about curious datasets. The link here is to a spreadsheet containing all the past ones.

## Inspiration
- https://pudding.cool/ - Cool articles backed by insanely cool visualizations
- [/r/dataisbeautiful](https://www.reddit.com/r/dataisbeautiful/top/?t=all) - Subreddit dedicated to cool visualizations
- [FiveThirtyEight](https://fivethirtyeight.com/) - News site that occasionally does fancy visualizations. They also provide all their data that they do use [here](https://data.fivethirtyeight.com/)
- [The Upshot by New York Times](https://www.nytimes.com/section/upshot) - Section in the NY Times which often has articles backed by visualizations