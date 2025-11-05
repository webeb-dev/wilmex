document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-open');
  const closeButton = document.querySelector('.menu-close');
  const menu = document.querySelector('.menu');
  const submenuTriggers = document.querySelectorAll('.menu > li > a');


  menuButton.addEventListener('click', () => {
    menu.classList.add('active');
    menuButton.style.display = 'none';
    closeButton.style.display = 'block';
  });


  closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
    menuButton.style.display = 'block';
    closeButton.style.display = 'none';
  });

  

  submenuTriggers.forEach(trigger => {
    const parentLi = trigger.parentElement;
    const sub = parentLi.querySelector('.services-submenu');


    if (sub) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 890) {
          e.preventDefault();


          document.querySelectorAll('.menu > li.open').forEach(li => {
            if (li !== parentLi) {
              const s = li.querySelector('.services-submenu');
              if (s) s.style.maxHeight = null;
              li.classList.remove('open');
            }
          });


          if (parentLi.classList.contains('open')) {
            sub.style.maxHeight = null;
            parentLi.classList.remove('open');
          } else {
            parentLi.classList.add('open');
            sub.style.maxHeight = sub.scrollHeight + 'px';
          }
        }
      });
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 890) {

      menu.classList.remove('active');
      menuButton.style.display = 'none';
      closeButton.style.display = 'none';
      document.querySelectorAll('.menu > li.open').forEach(li => {
        const s = li.querySelector('.services-submenu');
        if (s) s.style.maxHeight = null;
        li.classList.remove('open');
      });
    } else {
      menuButton.style.display = 'block';
      closeButton.style.display = 'none';
    }
  });


  const metalSelect = document.getElementById("metalSelect");
  const wagaInput = document.getElementById("wagaInput");
  const wynikKwota = document.getElementById("wynikKwota");
  const wynikJednostka = document.getElementById("wynikJednostka");

  function oblicz() {
    const cena = parseFloat(metalSelect?.value);
    const waga = parseFloat(wagaInput?.value);
    if (!isNaN(cena) && !isNaN(waga)) {
      wynikKwota.textContent = (cena * waga).toFixed(2);
    } else {
      wynikKwota.textContent = "0.00";
    }
  }

  metalSelect?.addEventListener("change", oblicz);
  wagaInput?.addEventListener("input", oblicz);


  const preview = document.getElementById('preview');
  const lightbox = document.getElementById('lightbox');

  if (preview && lightbox) {
    preview.addEventListener('click', () => {
      lightbox.style.display = 'flex';
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }
});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.menu-open');
  const closeButton = document.querySelector('.menu-close');

  if (!menu.classList.contains('active')) return;

  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {

    menu.classList.remove('active');
    menuButton.style.display = 'block';
    closeButton.style.display = 'none';
  }
  lastScrollTop = st <= 0 ? 0 : st;
});