


function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const plus = element.querySelector('.plus');
    const isVisible = answer.style.display === "block";
    

    document.querySelectorAll('.answer').forEach(a => a.style.display = "none");
    document.querySelectorAll('.plus').forEach(p => p.scr = "icon-minus.svg");

    if (!isVisible) {
      answer.style.display = "block";
      plus.src = "icon-minus.svg";
    }
  }