const columns = [
  'Total',
  'African American',
  'American Indian or Alaska Native',
  'Asian',
  'Filipino',
  'Hispanic or Latino',
  'Pacific Islander',
  'White',
  'Two or More Races',
  'Not Reported',
  'Year',
];

const colorsPerEthnicity = [
  '#DAF7A6',
  '#FFC300',
  '#FF5733',
  '#C70039',
  '#900C3F',
  '#DAF7A6',
  '#FF5733',
  '#2E86C1',
  '#9B59B6',
  '#CD6155',
];

const rawStudentData = [
  [3454, 1.7, 0.1, 65.4, 3.4, 14.1,	0.2, 14.5, 0.6, 0, '2014-2015'],
  [3424, 1.8, 0.2, 65.2, 3.6, 14.7, 0.1, 13.2, 1.1, 0.1, '2015-2016'],
  [3385, 2.1, 0.2, 64.4, 3.6, 14.3, 0.1, 13.9, 1.1, 0.3, '2016-2017'],
  [3306, 2.1, 0.1, 65.4, 3.7, 13.9, 0.1, 13.9, 0.9, 0, '2017-2018'],
  [3161, 2.3, 0.1, 65.2, 3.7, 14.1, 0.1, 13.4, 1.1, 0, '2018-2019'],
  [3087, 2.7, 0.1, 64.0, 3.3, 14.7, 0.1, 13.5, 1.2, 0.5, '2019-2020'],
];

// The years ('2015-16', '2016-2017'), which will be our X-axis, is the last column
const enrollmentYears = rawStudentData.map((row) => row[columns.length - 1]);
// The total number of students is in our first column
const enrollmentTotals = rawStudentData.map((row) => row[0]);
// This JavaScript code is referencing the HTML element with id of "enrollment-yoy-chart"
const enrollmentYoyChartContext = document.querySelector('#enrollment-yoy-chart').getContext('2d');
// This is what creates the chart!
const enrollmentYoyChart = new Chart(enrollmentYoyChartContext, {
    // Notice this chart type!
    type: 'bar',
    // The data for our dataset
    data: {
      labels: enrollmentYears,
      datasets: [{
          label: 'Enrollment at Arcadia High School Year-over-Year',
          // you can use this to find cool colors (use the HEX (#CA3B11) or rgb (rgb(202, 59, 17) values): https://htmlcolorcodes.com/
          backgroundColor: 'rgb(202, 59, 17)',
          data: enrollmentTotals,
      }],
    },
    options: {
      // Without options.scales, our yAxis starts at the lowest number in the dataset
      scales: {
        yAxes: [{
          ticks: {
              beginAtZero: true,
          }
        }]
      },
      // Display a title
      title: {
        display: true,
        text: 'Enrollment at Arcadia High School Year over Year',
      },
      // Since we only have 1 kind of label, our title is enough and we don't need a legend.
      legend: {
        display: false
      },
    }
});

// 2nd Chart
const ethnicityYears = rawStudentData.map((row) => row[columns.length - 1]);
// For our Y-Axis, we want each ethnicity to be represented, so we will create 1 dataset per ethnicity
const datasetPerEthnicity = columns.map((column, idx) => ({
  label: column,
  backgroundColor: colorsPerEthnicity[idx],
  data: rawStudentData.map((row) => {
    const totalEnrollment = row[0];
    const ethnicityPercentage = row[idx];
    const totalCount = totalEnrollment * (ethnicityPercentage / 100);
    return totalCount
  }),
})).filter((col, idx) => idx !== 0 && idx !== columns.length - 1);
// This JavaScript code is referencing the HTML element with id of "enrollment-yoy-chart"
const ethnicityYoyChartContext = document.querySelector('#ethnicity-yoy-chart').getContext('2d');
// This is what creates the chart!
const ethnicityYoyChart = new Chart(ethnicityYoyChartContext, {
    type: 'bar',
    data: {
      labels: ethnicityYears,
      datasets: datasetPerEthnicity,
    },
    options: {
      // This does the stacking! Try commenting out this scales object to see the bars separated aand not stacked.
      scales: {
        yAxes: [{ stacked: true }],
        xAxes: [{ stacked: true }]
      },
      // Display a title
      title: {
        display: true,
        text: 'Ethnicity of Students at Arcadia High School Year over Year',
      },
    }
});

const teacherData = [
  [157, 1, 1, 26, 2, 15, 0, 110, 2, 0, '2014-2015'], // 2014-2015 data
  [158, 1, 0, 28, 2, 14, 0, 111, 2, 0, '2015-2016'], // 2015-2016 data
  [150, 1, 0, 30, 2, 12, 0, 102, 2, 1, '2016-2017'], // 2016-2017 data
  [147, 1, 0, 26, 1, 15, 0, 101, 2, 1, '2017-2018'], // 2017-2018 data
  [142, 1, 0, 30, 1, 15, 0, 89, 3, 3, '2018-2019'] // 2018-2019 data
];
const xAxisLabels = teacherData.map((row) => row[row.length - 1]);

// We know that for each ethnicity, we need to create an Object with keys `label`, `backgroundColor`, and `data`. label refers to the ethnicity. backgroundColor is the color of the bar, and data is an Array of numbers, each number corresponding to the school year in `xAxisLabels``
const datasets = columns.map((column, idx) => ({
  label: column,
  backgroundColor: colorsPerEthnicity[idx],
  data: teacherData.map((yearRow) => yearRow[idx]),
}));
// the first item in datasets is Total, which we don't want to display, so remove that.
datasets.shift();
// the last item in the datasets is Year, which we don't want to display, so remove that.
datasets.pop()

const teacherEthnicityChartContext = document.querySelector('#teacher-ethnicity-yoy-chart').getContext('2d');

const teacherEthnicityChart = new Chart(teacherEthnicityChartContext, {
    type: 'bar',
    // FILL OUT = Take a look at Step 2 for a clue on how this should look.
    data: {
      labels: xAxisLabels,
      datasets,
    },
    // FILL OUT - Customize how your chart looks - stacked or not stacked, Whether to display Legend or not, Title of the chart, etc.
    options: {
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }],
      },
      title: {
        display: true,
        text: 'Teacher Ethnicities Year over Year'
      },
    }
});

// Comparison chart
const percentageDatasetPerStudentEthnicity = columns.map((column, idx) => ({
  label: column,
  backgroundColor: colorsPerEthnicity[idx],
  stack: 'students',
  // since teacher dataset ends at 2018-2019, ensure we filter out 2019-2020
  data: rawStudentData.filter((_, idx) => idx !== rawStudentData.length - 1).map((row) => row[idx]),
})).filter((col, idx) => idx !== 0 && idx !== columns.length - 1);
const percentageDatasetPerTeacherEthnicity = columns.map((column, idx) => ({
  label: column,
  backgroundColor: colorsPerEthnicity[idx],
  stack: 'teachers',
  data: teacherData.map((row) => row[idx] / row[0] * 100),
})).filter((col, idx) => idx !== 0 && idx !== columns.length - 1);
const teacherStudentComparisonChartContext = document.querySelector('#teacher-student-ethnicity-comparison-chart').getContext('2d');
const teacherStudentComparisonChart = new Chart(teacherStudentComparisonChartContext, {
  type: 'bar',
  data: {
    labels: xAxisLabels,
    datasets: [
      ...percentageDatasetPerStudentEthnicity,
      ...percentageDatasetPerTeacherEthnicity,
    ],
  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }],
      scaleLabel: {
        labelString: "swag"
      }
    },
    title: {
      display: true,
      text: 'Comparison of Teacher v. Student Ethnicities Year over Year'
    },
  }
});

// Subject Chart 1
const subjects = [
  'Art',
  'Dance',
  'Drama/Theater',
  'English Language Arts',
  'Foreign Languages',
  'Health Education',
  'History/Social Science',
  'Mathematics',
  'Music',
  'Physical Education',
  'Science',
];

const subjectDataByYear = [
  [9, 5, 3, 88, 48, 0, 53, 66, 17, 19, 43], // 2014-2015 data
  [14, 4, 3, 106, 61, 1, 71, 84, 17, 26, 64], // 2015-2016 data
  [16, 4, 2, 92, 60, 0, 57, 75, 20, 18, 58], // 2016-2017 data
  [], // 2017-2018 data
  [18, 8, 5, 138, 65, 1, 94, 104, 24, 37, 83] // 2018-2019 data
];

const subjectChart1Context = document.querySelector('#subject-chart-1').getContext('2d');

const subjectChart1 = new Chart(subjectChart1Context, {
    type: 'doughnut',
    data: {
      labels: subjects,
      datasets: [{
        label: 'Number of Classes',
        backgroundColor: [
          '#DAF7A6',
          '#FFC300',
          '#FF5733',
          '#C70039',
          '#900C3F',
          '#DAF7A6',
          '#FF5733',
          '#2E86C1',
          '#9B59B6',
          '#CD6155',
        ],
        data: subjectDataByYear[0]
      }],
    },
    options: {
      title: {
        display: true,
        text: 'Number of Classes/Subject for Year 2014-2015'
      }
    }
});

// subject chart 2
const subjectChart2Context = document.querySelector('#subject-chart-2').getContext('2d');

const subjectChart2 = new Chart(subjectChart2Context, {
    type: 'doughnut',
    data: {
      labels: subjects,
      datasets: [{
        label: 'Number of Classes',
        backgroundColor: [
          '#DAF7A6',
          '#FFC300',
          '#FF5733',
          '#C70039',
          '#900C3F',
          '#DAF7A6',
          '#FF5733',
          '#2E86C1',
          '#9B59B6',
          '#CD6155',
        ],
        data: subjectDataByYear[subjectDataByYear.length - 1]
      }],
    },
    options: {
      title: {
        display: true,
        text: 'Number of Classes/Subject for Year 2018-2019'
      }
    }
});