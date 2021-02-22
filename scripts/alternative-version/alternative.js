let submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', submit);

spinner = '<span class="spinner"></span>';

function submit(){
  submitButton.classList.add('loading');
  submitButton.innerHTML = spinner;
  setTimeout(() => {
    submitButton.classList.add('sucess-button');
    submitButton.innerHTML = `
    <svg id="icon-check-animated" viewBox="0 0 24 24">
    <polyline 
      id="checkmark" 
      fill="none"
      stroke="#fff"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="27"
      points="17 9 10.125 16 7 12.8181818"/>
    <animate 
      href="#checkmark"
      attributeName="stroke-dashoffset"
      values="-23;0" 
      dur="250ms"/>
    </svg>
    `
  }, 2000);
}
