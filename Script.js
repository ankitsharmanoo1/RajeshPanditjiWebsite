gsap.registerPlugin(ScrollTrigger);
    gsap.from('.logo',{duration:0.8,scale:0.6,opacity:0,ease:'power2.out'});
    gsap.from('.kicker',{duration:0.9,y:20,opacity:0,delay:0.2});
    gsap.from('h1',{duration:1,y:30,opacity:0,delay:0.25,ease:'power3.out'});
    gsap.from('.lead',{duration:0.9,y:20,opacity:0,delay:0.5});
    gsap.from('.hero-img img',{duration:1.1,x:80,opacity:0,delay:0.6});

    gsap.utils.toArray('.service-card').forEach((el,i)=>{
      gsap.from(el,{scrollTrigger:{trigger:el,start:'top 90%'},opacity:0,y:30,duration:0.8,delay:i*0.12});
    });

    gsap.from('.about-box',{scrollTrigger:{trigger:'.about-box',start:'top 80%'},opacity:0,y:30,duration:0.8,stagger:0.1});
    gsap.from('.gallery-item',{scrollTrigger:{trigger:'.gallery-item',start:'top 90%'},opacity:0,scale:0.96,duration:0.8,stagger:0.06});

    // smooth nav
    document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();const href=a.getAttribute('href');if(href==="#")return;document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});});});

    // form handling (demo)
    const form=document.getElementById('contactForm');const success=document.getElementById('success');
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const name=document.getElementById('name').value.trim();
      const phone=document.getElementById('phone').value.trim();
      const service=document.getElementById('service').value;
      if(!name||!phone||!service){alert('कृपया सभी आवश्यक फ़ील्ड भरें।');return;}
      gsap.to(form,{opacity:0.4,duration:0.3});
      setTimeout(()=>{
        form.reset();
        gsap.to(form,{opacity:1,duration:0.3});
        success.style.display='block';
        gsap.from(success,{opacity:0,y:-10,duration:0.6});
        setTimeout(()=>{gsap.to(success,{opacity:0,duration:0.5,onComplete:()=>{success.style.display='none';success.style.opacity=1;}})},5000)
      },700);
    });

    document.getElementById('callBtn').addEventListener('click',()=>{window.location.href='tel:+919887522879'});
      // OPEN MENU
    document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
  closeBtn.addEventListener("click", () => mobileMenu.classList.remove("open"));

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
});
