const name = localStorage.getItem('celebrityName');
const imgSrc = localStorage.getItem('celebrityImage');
const celebrityTag = localStorage.getItem('celebrityTag');

      if (name && imgSrc) {
        document.getElementById('profile-picture').innerHTML = `<img src="${imgSrc}" alt="${name}" />`;
        document.getElementById('username').textContent = name;
        document.getElementById('celebrity-tag').textContent = celebrityTag;
      }