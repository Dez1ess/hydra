const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
  })
})


const hiddenElementsLeft = document.querySelectorAll(".hidden-1");
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll(".hidden-2");
hiddenElementsRight.forEach((el) => observer.observe(el));


