import { createCounter } from './core.js';
const result = document.querySelector('#result');
const events = document.querySelector('#events');
let a, b;
function callbackFor(station) {
  return value => {
    const li = document.createElement('li'); li.textContent = `${station} callback received ${value}`;
    events.append(li); if (events.children.length > 20) events.firstElementChild.remove();
  };
}
function reset() {
  a = createCounter({ onCount: callbackFor('A') });
  b = createCounter({ onCount: callbackFor('B') });
  events.replaceChildren();
  document.querySelector('#latest-a').textContent = '—';
  document.querySelector('#latest-b').textContent = '—';
  result.textContent = 'New counters ready. The first emitted value is zero.';
}
document.querySelector('#a').addEventListener('click', () => { const value = a(); document.querySelector('#latest-a').textContent = value; result.textContent = `A returned ${value}`; });
document.querySelector('#b').addEventListener('click', () => { const value = b(); document.querySelector('#latest-b').textContent = value; result.textContent = `B returned ${value}`; });
document.querySelector('#reset').addEventListener('click', reset);
reset();
