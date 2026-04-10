const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    navItems.forEach((entry) => entry.classList.remove('active'));
    item.classList.add('active');
  });
});
