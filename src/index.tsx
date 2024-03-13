/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// 禁用鼠标右键的默认事件
// document.addEventListener("contextmenu",function(e){
// 	e.preventDefault()
// })

render(() => <App />, root!);
