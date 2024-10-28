// Hover tips for progress bar
function tips() {
  const elements = [...document.querySelectorAll('[tips]')]
  let i = 0; // Counter for unique class names
  for (const el of elements) {
    const tip = document.createElement('div')
    tip.classList.add('tooltipBar')
    tip.textContent = el.getAttribute('tips')
    tip.style.backgroundColor = el.getAttribute('tips-col')
    el.style.position = 'relative'
    tip.style.position = 'absolute'
    tip.style.left = 'calc(50% + 2px)' // + 2px for border...
    tip.style.transform = 'translateX(-50%)'
    tip.style.top = 'calc(100% + 11px)'
    el.appendChild(tip)

    // Create a unique class for this tooltip
    const uniqueClass = 'tooltipBar-' + i;
    tip.classList.add(uniqueClass);

    // Create a style element for the triangle
    const tipColorT = el.getAttribute('tips-col')
    const style = document.createElement('style')
    style.innerHTML = `
      .${uniqueClass}::before {
        border-bottom: 10px solid ${tipColorT};
      }
    `;
    document.head.appendChild(style);

    i++; // Increment the counter
  }
}

setTimeout(tips, 500)
