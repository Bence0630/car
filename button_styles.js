function styleDivsExceptOne() {
  const divs = document.querySelectorAll('div:not(#no-hover)'); // Select all divs except the one with ID 'no-hover'
  divs.forEach(div => {
    div.style.transition = 'transform 0.3s ease';

    div.addEventListener('mouseover', () => {
      div.style.transform = 'scale(1.1)';
    });

    div.addEventListener('mouseout', () => {
      div.style.transform = 'scale(1)';
    });
  });
}

document.addEventListener('DOMContentLoaded', styleDivsExceptOne);
