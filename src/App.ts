import cors from 'cors';
import express, { Application, RequestHandler } from 'express';
import serveIndex from 'serve-index';
import configs from './configs';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public async create() {
    this.configureMiddleWares();
    this.configureRoutes();
    return this.app;
  }

  private configureMiddleWares() {
    this.app.use(express.json() as RequestHandler);
    this.app.use(cors());
  }

  private configureRoutes() {
    this.app.get('/', (req, res) => {
      res.send({ version: '1.0.0', name: 'file-share' })
    })
    this.app.use(
      '/ftp',
      express.static('/home/gitpod/ftp'),
      serveIndex('/home/gitpod/ftp', { icons: true })
    );
  }

  public async start() {
    this.app.listen(configs.PORT, () => {
      console.log(`[app] > listen on port ${configs.PORT}`);
    });
  }

  public getApplication() {
    return this.app;
  }

}
