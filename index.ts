require('dotenv').config();
import express = require('express');
import DHLAPI from './lib/index';
import { logger } from './lib/utils/logger';
import * as utils from './test/utils';

export class Server {

  constructor(private app: express.Express, private port: number) {
    this.configureRoutes(app);
  }

  public run() {
    this.app.listen(this.port);
  }

  private configureRoutes(app: express.Express) {

    const dhl = new DHLAPI({
      env: process.env.DHL_ENV,
      debug: process.env.DHL_DEBUG === 'true' ? true : false,
      account: process.env.DHL_ACC,
      siteID: process.env.DHL_SID,
      password: process.env.DHL_PWD
    });

    app.get('/', (req, res) => {

      const params = utils.services.get;
      dhl.getServices(params, (err, result) => {
        if (err) {
          logger.debug('results from server err', err);
          return res.send(err);
        }

        return res.send(result);
      });

    });

  }

}

// Set up the server
let port = 8881;
let api = new Server(express(), port);
api.run();
console.info(`listening on ${port}`);
