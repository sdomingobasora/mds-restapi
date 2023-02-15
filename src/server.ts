import App from './app';
import { HelloRouter } from './routes';

const app = new App([HelloRouter]);

app.listen();
