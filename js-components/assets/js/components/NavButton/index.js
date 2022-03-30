
function NavButton(options = {}) {
  const NavButtonHTML = `
  <li class="flexListItem">
    <p class="timeLabel">${options.time}</p>
    <img class="wetherImg" src=${options.wetherImage}/>
    <p class="degressLabel">${options.degress}</p>
  </li>
    `;

  return NavButtonHTML;
}
