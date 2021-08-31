import { onNavigate } from '../app.js';

export function ButtonGoogle() {
  const googleButton = document.createElement('button');
  const googleImg = document.createElement('img');
  const buttonGoogleDiv = document.createElement('div');
  // Boton de google
  googleButton.setAttribute('type', 'button');
  googleButton.setAttribute('class', 'signup-google button-google');
  // googleButton.setAttribute('class', 'button-google');
  googleButton.id = 'registerGoogle';
  googleButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        onNavigate('/feed');
      })
      .catch(err => {
        console.log(err);
      });
  });
  // Imagen del logo de google
  googleImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg ';
  googleButton.appendChild(googleImg);
  buttonGoogleDiv.setAttribute('class', 'access-google');
  buttonGoogleDiv.textContent = 'Accede con Google';
  googleButton.appendChild(buttonGoogleDiv);
  return googleButton;
}
