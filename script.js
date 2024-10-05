document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const currentFaqItem = question.parentElement;
      const allFaqItems = document.querySelectorAll('.faq-item');
  
      // Loop through all FAQ items and close them except the current one
      allFaqItems.forEach((item) => {
        if (item !== currentFaqItem) {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
  
      // Toggle the current FAQ item
      currentFaqItem.classList.toggle('active');
  
      // Toggle max-height for the current FAQ answer
      const faqAnswer = currentFaqItem.querySelector('.faq-answer');
      if (faqAnswer.style.maxHeight) {
        faqAnswer.style.maxHeight = null;
      } else {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
      }
    });
  });
  
  });

  document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementsByClassName("dropdown")
    const hamburger = document.getElementsByClassName("all-pages")

    hamburger.addEventListener("click",() => {
      dropdown.style.opacity= "0%";
    })
    
    });

  


  document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".video-player");
    const playButton = document.querySelector(".play-btn");

    // Play video, hide play button, and show video controls
    playButton.addEventListener("click", () => {
        video.play();
        playButton.style.display = "none";
        video.setAttribute("controls", "controls"); // Add controls attribute to the video
    });



    // Show play button when video ends
    video.addEventListener("ended", () => {
        playButton.style.display = "block";
        video.removeAttribute("controls"); // Remove controls when video ends
    });
});

const monthlyBtn = document.getElementById('monthlyBtn');
        const yearlyBtn = document.getElementById('yearlyBtn');
        const basicPrice = document.getElementById('basicPrice');
        const proPrice = document.getElementById('proPrice');
        const enterprisePrice = document.getElementById('enterprisePrice');
        const basicDuration = document.getElementById('basicDuration');
        const proDuration = document.getElementById('proDuration');
        const enterpriseDuration = document.getElementById('enterpriseDuration');

        const monthlyPrices = { basic: 0, pro: 10, enterprise: 19 };
        const yearlyPrices = { basic: 0, pro: 99, enterprise: 199 };

        function setMonthly() {
            monthlyBtn.classList.add('active');
            yearlyBtn.classList.remove('active');
            basicPrice.textContent = monthlyPrices.basic;
            proPrice.textContent = monthlyPrices.pro;
            enterprisePrice.textContent = monthlyPrices.enterprise;
            basicDuration.textContent = ' month';
            proDuration.textContent = ' month';
            enterpriseDuration.textContent = ' month';
        }

        function setYearly() {
            yearlyBtn.classList.add('active');
            monthlyBtn.classList.remove('active');
            basicPrice.textContent = yearlyPrices.basic;
            proPrice.textContent = yearlyPrices.pro;
            enterprisePrice.textContent = yearlyPrices.enterprise;
            basicDuration.textContent = ' year';
            proDuration.textContent = ' year';
            enterpriseDuration.textContent = ' year';
        }

        monthlyBtn.addEventListener('click', setMonthly);
        yearlyBtn.addEventListener('click', setYearly);