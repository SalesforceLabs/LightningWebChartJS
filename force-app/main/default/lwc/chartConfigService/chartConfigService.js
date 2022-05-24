import { ATTRIBUTE_CARTESIAN_AXES } from 'c/constants';

export default class ChartConfigService {
  static defaultConfiguration() {
    return {
      legend: {
        display: false
      }
    };
  }

  constructor() {
    this._config = ChartConfigService.defaultConfiguration(); // clone default configuration
    this._scales = {
      xAxes: {},
      yAxes: {}
    };
    this._dirty = true; // build dirty
  }

  // make the component dirty
  // merge option sent to update the config Chart.js object
  updateConfig(payload, option) {
    this._dirty = true;
    // When no option it is a base object
    // so merge object
    if (!option) {
      this._config = {
        ...this._config,
        ...payload
      };
    } else {
      this._config[option] = this._config[option] || {};
      Object.keys(payload).forEach((attribut) => {
        // If the attribut is an array
        if (Array.isArray(this._config[option][attribut])) {
          if (Array.isArray(payload[attribut])) {
            // If this is a scale object merge using the uuid
            if (Object.prototype.hasOwnProperty.call(this._scales, attribut)) {
              this._scales[attribut][payload[attribut][0].uuid] =
                payload[attribut][0];
              this._config[option][attribut] = Object.values(
                this._scales[attribut]
              );
            } else {
              // add the array to the current array
              this._config[option][attribut].push(...payload[attribut]);
            }
          } else {
            // add the option
            this._config[option][attribut].push(payload[attribut]);
          }
        } else if (
          // the attribut is an object we know
          typeof this._config[option][attribut] === 'object' &&
          this._config[option][attribut] !== null
        ) {
          // merge it
          this._config[option][attribut] = {
            ...this._config[option][attribut],
            ...payload[attribut]
          };
        } else {
          // the attribut is an object we don't know
          this._config[option][attribut] = payload[attribut]; // store it

          // If this is a scale object with data, add it to the scales property
          if (
            Object.prototype.hasOwnProperty.call(this._scales, attribut) &&
            payload[attribut] !== undefined
          ) {
            this._scales[attribut][payload[attribut][0].uuid] =
              payload[attribut][0];
          }
        }
      });
    }
  }

  // make the object dirty and remove the option sent
  removeConfig(payload, option) {
    this._dirty = true;
    // In the scales case we need to remove the uuid related to the scale object
    if (option === ATTRIBUTE_CARTESIAN_AXES) {
      Object.keys(this._config[option])
        .filter((scale) => this._config[option][scale])
        .forEach((scale) => {
          this._config[option][scale] = this._config[option][scale].filter(
            (axis) => axis.uuid !== payload[scale][0].uuid
          );
          this._scales[scale] = this._config[option][scale];
        });
    } else {
      // remove the option
      this._config[option] = undefined;
    }
  }

  // if dirty clean the object and store the cleaned version
  getConfig() {
    if (this._dirty) {
      this._cleanConfig = ChartConfigService.cleanObject(this._config);
      this._dirty = false;
    }
    return this._cleanConfig;
  }

  // Return a lightweight object without
  // - empty object
  // - empty array
  // - undefined attribute
  // do it recursively and store the result to avoid multiple times the same computation
  static cleanObject(obj) {
    const validObj = (o) =>
      (Object.keys(o).length || (Array.isArray(o) && o.length)) && o;
    const itemToBool = (item) => {
      return typeof item !== 'object' || item === null
        ? item
        : // eslint-disable-next-line no-use-before-define
          validObj(clean(item));
    };

    const clean = (o) =>
      validObj(
        Array.isArray(o)
          ? o.map(itemToBool).filter(Boolean)
          : Object.entries(o).reduce((a, [key, val]) => {
              const newVal = itemToBool(val);
              if (
                // Here is the magic check null, undefined and type change (=> undefined recursively)
                newVal !== undefined &&
                newVal !== null &&
                typeof val === typeof newVal
              )
                a[key] = newVal;
              return a;
            }, {})
      );

    return clean(obj);
  }
}
