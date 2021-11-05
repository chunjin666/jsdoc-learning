function getNow() {
  return Date.now();
}

parseInt('123', 8);

/** @type {HTMLElement} */
const el = document.getElementById('app');
el.addEventListener('click', (e) => {
  console.log(e.target);
});

class Foo {
  now = Date.now();
}

const now = Date.now();
