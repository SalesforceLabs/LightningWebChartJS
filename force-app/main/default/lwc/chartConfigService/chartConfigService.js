export default class ChartConfigService {
  static DefaultConfiguration = {
    legend: {
      display: false
    }
  };

  constructor() {
    this._config = { ...ChartConfigService.DefaultConfiguration };
    this._scales = {
      xAxes: {},
      yAxes: {}
    };
    this._dirty = true;
  }

  updateConfig(payload, option) {
    this._dirty = true;
    if (!option) {
      this._config = {
        ...this._config,
        ...payload
      };
    } else {
      this._config[option] = this._config[option] || {};
      Object.keys(payload).forEach(attribut => {
        if (Array.isArray(this._config[option][attribut])) {
          if (Array.isArray(payload[attribut])) {
            if (Object.prototype.hasOwnProperty.call(this._scales, attribut)) {
              this._scales[attribut][payload[attribut][0].uuid] =
                payload[attribut][0];
              this._config[option][attribut] = Object.values(
                this._scales[attribut]
              );
            } else {
              this._config[option][attribut].push(...payload[attribut]);
            }
          } else {
            this._config[option][attribut].push(payload[attribut]);
          }
        } else if (
          typeof this._config[option][attribut] === 'object' &&
          this._config[option][attribut] !== null
        ) {
          this._config[option][attribut] = {
            ...this._config[option][attribut],
            ...payload[attribut]
          };
        } else {
          this._config[option][attribut] = payload[attribut];
        }
      });
    }
  }

  removeConfig(payload, option) {
    this._dirty = true;
    if (option === 'scales') {
      Object.keys(this._config[option])
        .filter(axis => this._config[option][axis])
        .forEach(axis => {
          this._config[option][axis] = this._config[option][axis].filter(
            axe => axe.uuid !== payload.uuid
          );
        });
    } else {
      this._config[option] = undefined;
    }
  }

  getConfig() {
    if (this._dirty) {
      this._cleanConfig = ChartConfigService.cleanObject(this._config);
      this._dirty = false;
    }
    return this._cleanConfig;
  }

  static cleanObject(obj) {
    const validObj = o => Object.keys(o).length && o;
    const itemToBool = item => {
      return typeof item !== 'object' || item === null
        ? item
        : // eslint-disable-next-line no-use-before-define
          validObj(clean(item));
    };

    const clean = o =>
      validObj(
        Array.isArray(o)
          ? o.map(itemToBool).filter(Boolean)
          : Object.entries(o).reduce((a, [key, val]) => {
              const newVal = itemToBool(val);
              if (newVal) a[key] = newVal;
              return a;
            }, {})
      );

    return clean(obj);
  }
}
