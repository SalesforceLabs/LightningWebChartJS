import { LightningElement } from 'lwc';

const COLOR_BLUE = 'rgba(82, 183, 216, 0.6)';
const COLOR_ORANGE = 'rgba(225, 96, 50, 0.6)';
const COLOR_YELLOW = 'rgba(255, 176, 59, 0.6)';
const COLOR_GREEN = 'rgba(84, 167, 123, 0.6)';
const COLOR_AQUA = 'rgba(79, 210, 210, 0.6)';
const COLOR_PINK = 'rgba(226, 135, 178, 0.6)';

const ALL_COLORS = [
  COLOR_BLUE,
  COLOR_ORANGE,
  COLOR_YELLOW,
  COLOR_GREEN,
  COLOR_AQUA,
  COLOR_PINK
];

const DATASET_LABELS = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
//const DATASET_LABELS = ["Blue", "Orange", "Yellow", "Green", "Light Blue", "Purple"];

//const GROUPS = ['First group', 'Second Group'];
const GROUPS = ['Blue group', 'Red Group', 'Orange Group'];

export default class StructureSamples extends LightningElement {
  barCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE)]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', COLOR_ORANGE)
      ]
    },
    {
      title: 'Two datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', [...ALL_COLORS])
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [...ALL_COLORS])
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [
          COLOR_ORANGE,
          COLOR_PINK
        ])
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title:
        '*From chart data provider with no labels - Just the first item is displayed',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  horizontalBarCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE)]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', COLOR_ORANGE)
      ]
    },
    {
      title: 'Two datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', [...ALL_COLORS])
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [...ALL_COLORS])
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [
          COLOR_ORANGE,
          COLOR_PINK
        ])
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title:
        '*From chart data provider with no labels - Just the first item is displayed',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  lineCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE)]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE, false),
        this.cDataItem(
          GROUPS[1],
          '[10, 15, 17, 12, 3, 4]',
          COLOR_ORANGE,
          false
        ),
        this.cDataItem(GROUPS[2], '[18, 10, 20, 10, 8, 4]', COLOR_YELLOW, false)
      ]
    },
    {
      title: 'Three datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', [...ALL_COLORS])
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [...ALL_COLORS])
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [
          COLOR_ORANGE,
          COLOR_PINK
        ])
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title:
        '*From chart data provider with no labels - Just the first item is displayed',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  pieCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE)]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE, false),
        this.cDataItem(
          GROUPS[1],
          '[10, 15, 17, 12, 3, 4]',
          COLOR_ORANGE,
          false
        ),
        this.cDataItem(GROUPS[2], '[18, 10, 20, 10, 8, 4]', COLOR_YELLOW, false)
      ]
    },
    {
      title: 'Three datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', [...ALL_COLORS])
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [...ALL_COLORS])
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [
          COLOR_ORANGE,
          COLOR_PINK
        ])
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title: '*From chart data provider with no labels - No legend ?',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  doughnutCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE)]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE, false),
        this.cDataItem(
          GROUPS[1],
          '[10, 15, 17, 12, 3, 4]',
          COLOR_ORANGE,
          false
        ),
        this.cDataItem(GROUPS[2], '[18, 10, 20, 10, 8, 4]', COLOR_YELLOW, false)
      ]
    },
    {
      title: 'Three datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', [...ALL_COLORS])
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [...ALL_COLORS])
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [
          COLOR_ORANGE,
          COLOR_PINK
        ])
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title: '*From chart data provider with no labels - No legend ?',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  bubbleCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4, r: 5 },
            { x: 3, y: 4, r: 5 }
          ],
          COLOR_BLUE
        )
      ]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4, r: 5 },
            { x: 3, y: 4, r: 5 }
          ],
          [...ALL_COLORS]
        ) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4, r: 5 },
            { x: 3, y: 4, r: 5 }
          ],
          COLOR_BLUE,
          false
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7, r: 1 },
            { x: 2, y: 9, r: 3 }
          ],
          COLOR_ORANGE,
          false
        ),
        this.cDataItem(
          GROUPS[2],
          [
            { x: 8, y: 4, r: 3 },
            { x: 1, y: 8, r: 3 },
            { x: 2, y: 4, r: 9 }
          ],
          COLOR_YELLOW,
          false
        )
      ]
    },
    {
      title: 'Three datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4, r: 5 },
            { x: 3, y: 4, r: 5 }
          ],
          [...ALL_COLORS]
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7, r: 1 },
            { x: 2, y: 9, r: 3 }
          ],
          [...ALL_COLORS]
        )
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4, r: 5 }
          ],
          [COLOR_BLUE, COLOR_ORANGE]
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7, r: 1 },
            { x: 2, y: 9, r: 3 }
          ],
          [...ALL_COLORS]
        )
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4, r: 5 }
          ],
          [COLOR_BLUE, COLOR_ORANGE]
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7, r: 1 },
            { x: 2, y: 9, r: 3 }
          ],
          [COLOR_ORANGE, COLOR_PINK]
        )
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title: '*From chart data provider with no labels - No legend ?',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  radarCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE)]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE, false),
        this.cDataItem(
          GROUPS[1],
          '[10, 15, 17, 12, 3, 4]',
          COLOR_ORANGE,
          false
        ),
        this.cDataItem(GROUPS[2], '[18, 10, 20, 10, 8, 4]', COLOR_YELLOW, false)
      ]
    },
    {
      title: 'Three datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', [...ALL_COLORS])
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [...ALL_COLORS])
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [
          COLOR_ORANGE,
          COLOR_PINK
        ])
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title: '*From chart data provider with no labels - No legend ?',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  scatterCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4 },
            { x: 3, y: 4 }
          ],
          COLOR_BLUE
        )
      ]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4 },
            { x: 3, y: 4 }
          ],
          [...ALL_COLORS]
        ) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4 },
            { x: 3, y: 4 }
          ],
          COLOR_BLUE,
          false
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7 },
            { x: 2, y: 9 }
          ],
          COLOR_ORANGE,
          false
        ),
        this.cDataItem(
          GROUPS[2],
          [
            { x: 8, y: 4 },
            { x: 1, y: 8 },
            { x: 2, y: 4 }
          ],
          COLOR_YELLOW,
          false
        )
      ]
    },
    {
      title: 'Three datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4 },
            { x: 3, y: 4 }
          ],
          [...ALL_COLORS]
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7 },
            { x: 2, y: 9 }
          ],
          [...ALL_COLORS]
        )
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4 }
          ],
          [COLOR_BLUE, COLOR_ORANGE]
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7 },
            { x: 2, y: 9 }
          ],
          [...ALL_COLORS]
        )
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(
          GROUPS[0],
          [
            { x: 3, y: 7, r: 10 },
            { x: 5, y: 4 }
          ],
          [COLOR_BLUE, COLOR_ORANGE]
        ),
        this.cDataItem(
          GROUPS[1],
          [
            { x: 6, y: 12, r: 11 },
            { x: 4, y: 7 },
            { x: 2, y: 9 }
          ],
          [COLOR_ORANGE, COLOR_PINK]
        )
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title: '*From chart data provider with no labels - No legend ?',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  polarAreaCharts = [
    {
      title: 'One dataset, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE)]
    },
    {
      title: 'One dataset, items of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]) // Force code readability
      ]
    },
    {
      title: 'Two datasets, groups of different color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', COLOR_BLUE, false),
        this.cDataItem(
          GROUPS[1],
          '[10, 15, 17, 12, 3, 4]',
          COLOR_ORANGE,
          false
        ),
        this.cDataItem(GROUPS[2], '[18, 10, 20, 10, 8, 4]', COLOR_YELLOW, false)
      ]
    },
    {
      title: 'Three datasets, items of same color',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15]', [...ALL_COLORS]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12, 3, 4]', [...ALL_COLORS])
      ]
    },
    {
      title: 'Two datasets with missing items',
      datasetLabels: DATASET_LABELS,
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [...ALL_COLORS])
      ]
    },
    {
      title: '*Without dataset labels - Makes sense ?',
      datasetLabels: [''],
      datasets: [
        this.cDataItem(GROUPS[0], '[12, 19, 7, 9, 5, 15, 8, 8]', [
          COLOR_BLUE,
          COLOR_ORANGE
        ]),
        this.cDataItem(GROUPS[1], '[10, 15, 17, 12]', [
          COLOR_ORANGE,
          COLOR_PINK
        ])
      ]
    },
    {
      title: 'From chart data provider',
      ...this.parseDataProvider(
        ['Item1', 'Item2', 'Item3'],
        [3, 7, 6],
        COLOR_BLUE
      )
    },
    {
      title: '*From chart data provider with no labels - No legend ?',
      ...this.parseDataProvider([], [3, 7, 6], COLOR_BLUE)
    }
  ];

  cDataItem(label, detail, backgroundcolor, fill = true) {
    return {
      label,
      detail,
      backgroundcolor,
      fill
    };
  }

  parseDataProvider(labels, detail, bgColor) {
    return {
      datasetLabels: labels,
      datasets: [this.cDataItem('UniqueGroup', detail, bgColor)]
    };
  }

  get circumference() {
    return 1 * Math.PI;
  }

  get rotation() {
    return -1 * Math.PI;
  }
}
