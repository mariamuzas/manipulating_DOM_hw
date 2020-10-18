document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

   const form = document.querySelector('#new-hit-form');
   form.addEventListener('submit', handleForm);

   const deleteAll = document.querySelector('#delete-button');
   deleteAll.addEventListener('click', handleDeleteButton);
});


const handleForm = (event) => {
    event.preventDefault();

    const newHit = document.createElement('li');

    const musicList = document.querySelector('#hits-list');
    newHit.textContent = `${this.song.value}, ${this.artist.value}, ${this.album.value}, ${this.year.value}`;

    event.target.reset();

    musicList.appendChild(newHit);
};

const handleDeleteButton = () => {
    const musicList = document.querySelector('#hits-list');
    while(musicList.firstChild) {
        musicList.firstChild.remove()
    };
};
