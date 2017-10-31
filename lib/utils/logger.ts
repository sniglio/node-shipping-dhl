

import * as moment from 'moment';
import * as winston from 'winston';

export const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'silly',
      colorize: true,
      timestamp: function () {
        return moment().format('DD/MM/YY h:mm:ssa');
      },
      formatter: function (options) {
        const message = options.message ? options.message : '';
        const data = (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
        return `${options.timestamp()} ${options.level.toUpperCase()} ${message} ${data}`;
      }
    })
  ]
});
