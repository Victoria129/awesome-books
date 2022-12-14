const bookList = document.querySelector('#displayed-books');
const bookAdd = document.querySelector('.add-awesombooks');
const contactMe = document.querySelector('.contact-me');
const link = document.querySelectorAll('.link');
const link2 = document.querySelector('.addbookform');
const link1 = document.querySelector('.listofbook');
const link3 = document.querySelector('.contactInfo');

link.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('listofbook')) {
      bookAdd.style.display = 'none';
      contactMe.style.display = 'none';
      bookList.style.display = 'block';
      e.target.classList.add('active');
      link2.classList.remove('active');
      link3.classList.remove('active');
    }
    if (e.target.classList.contains('addbookform')) {
      contactMe.style.display = 'none';
      bookList.style.display = 'none';
      bookAdd.style.display = 'flex';
      e.target.classList.add('active');
      link1.classList.remove('active');
      link3.classList.remove('active');
    }
    if (e.target.classList.contains('contactInfo')) {
      bookAdd.style.display = 'none';
      bookList.style.display = 'none';
      contactMe.style.display = 'flex';
      e.target.classList.add('active');
      link2.classList.remove('active');
      link1.classList.remove('active');
    }
  });
});

window.addEventListener('load', () => {
  link1.classList.add('active');
});

/* eslint-disable no-undef */
setInterval(() => {
  const dt = luxon.DateTime.now();
  const time = document.querySelector('.time-div');
  time.textContent = dt.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
}, 1);