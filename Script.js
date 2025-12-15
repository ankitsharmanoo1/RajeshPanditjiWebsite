document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.classList.add('menu-open');
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove('menu-open');
  });

  document.querySelectorAll(".mobile-menu a").forEac(link => {
    link.addEventListener("click", () => {     
      mobileMenu.classList.remove("open");
      document.body.classList.remove('menu-open');
    });
  });

  // close when clicking outside (backdrop)
  document.addEventListener('click', (e) => {
    if (document.body.classList.contains('menu-open')) {
      const inside = e.composedPath().some(el => (el.classList && el.classList.contains && el.classList.contains('mobile-menu')));
      const isHamb = e.composedPath().some(el => (el.classList && el.classList.contains && el.classList.contains('hamburger')));
      if (!inside && !isHamb) {
        mobileMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    }
  });
});

    gsap.from("header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Mobile Menu Animation (jab open ho)
    function toggleMenu() {
        const menu = document.getElementById("mobileMenu");

        if (menu.classList.contains("open")) {
            gsap.to(menu, {
                x: "100%",
                duration: 0.4,
                ease: "power2.inOut"
            });
            menu.classList.remove("open");
        } else {
            gsap.fromTo(menu,
                { x: "100%" },
                {
                    x: 0,
                    duration: 0.4,
                    ease: "power2.inOut"
                }
            );
            menu.classList.add("open");
        }
    }

    // Scroll Animations for Sections
    gsap.utils.toArray(".section").forEach((sec) => {
        gsap.from(sec, {
            scrollTrigger: {
                trigger: sec,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Image subtle zoom animation
    gsap.utils.toArray("img").forEach((img) => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 85%"
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

