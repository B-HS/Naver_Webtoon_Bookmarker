import { createRoot } from 'react-dom/client';
import App from './App';

const body = document.querySelector('body');
const app = document.createElement('div');

app.id = 'root';

if (body) {
    body.prepend(app);
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
