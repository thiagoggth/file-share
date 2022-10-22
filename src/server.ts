import { App } from './App';

async function bootstrap() {
  try {
    const application = new App();
    await application.create();
    await application.start();
  } catch (error) {
    console.log('[server] > error to up application: ', error);
  }
}

bootstrap();
