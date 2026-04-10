const counters = document.querySelectorAll('.num');

const animateCounter = (element) => {
  const target = Number(element.dataset.target);
  let current = 0;
  const step = Math.max(1, Math.floor(target / 35));

  const tick = () => {
    current += step;
    if (current >= target) {
      element.textContent = target;
      return;
    }
    element.textContent = current;
    requestAnimationFrame(tick);
  };

  tick();
};

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => observer.observe(counter));

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#formNote').textContent = '已收到预约请求，我们将尽快联系你。';
  event.target.reset();
});

document.querySelector('#playVideo').addEventListener('click', () => {
  alert('下一步可接入演示视频或产品导览弹窗。');
});
