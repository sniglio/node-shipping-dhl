
import * as moment from 'moment';
import * as request from 'request';
import * as builder from 'xmlbuilder';
import * as crypto from 'crypto';
import * as _extend from 'lodash/extend';
import * as path from 'path';
import * as parser from 'xml2js';
import { logger } from './utils/logger';

export default class DHLAPI {
  private account: string = this.params.account;
  private env: string = this.params.env;
  private debug: boolean = this.params.debug;
  private id: string = this.params.id;
  private url: string = this.env === 'production' ? 'https://xmlpi-ea.dhl.com/XMLShippingServlet' : 'https://xmlpitest-ea.dhl.com/XMLShippingServlet';
  private password: string = this.params.password;
  private secret: string = this.params.secret;
  private username: string = this.params.username;

  constructor(
    private params: any
  ) { }

  public getServices(params: any, cb: any) {

    this.request(params, 'KnownTrackingRequest', 'TrackingRequestKnown', (err, res) => {
      return cb(err, res);
    });

  }

  public getTracking(params: any, cb: any) {

    this.request(params, 'KnownTrackingRequest', 'TrackingRequestKnown', (err, res) => {
      return cb(err, res);
    });

  }

  private request(params: any, fn: string, wsdl: string, cb) {

    const messageReference = crypto.randomBytes(16).toString('hex');

    params = _extend({
      Request: {
        ServiceHeader: {
          MessageTime: moment().format(),
          MessageReference: messageReference,
          SiteID: this.id,
          Password: this.password
        }
      }
    }, params);

    const xml = builder.create({
      [`req:${fn}`]: params
    })
      .att('xmlns:req', 'http://www.dhl.com')
      .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
      .att('xmlns:schemaLocation', `http://www.dhl.com ${wsdl}.xsd`)
      .end({ pretty: true });

    request.post({
      url: this.url,
      body: xml,
      headers: {
        'Content-Type': 'text/xml'
      }
    }, (err, res, body) => {

      if (this.debug && err) {

        parser.parseString(err, { explicitArray: false }, (err, res) => {
          logger.error(`${fn} error`, err);
          return cb(err);
        });

      }

      parser.parseString(body, { explicitArray: false }, (err, res) => {
        logger.log(`${fn} done`, err);
        return cb(err, res);
      });


    });

  }

}
