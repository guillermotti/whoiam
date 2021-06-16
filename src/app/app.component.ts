import { Component } from '@angular/core';

import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
  faGithub,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Guillermo Vigil Rodríguez';
  job = 'Platform Engineer';
  description = 'Deploy, develop, run.';
  smallImage = 'assets/img/small-profile.jpg';
  bigImage = 'assets/img/big-profile.png';

  // Icons
  rrss = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/guillermotti' },
    { icon: faInstagram, url: 'https://www.instagram.com/guillermotti' },
    { icon: faTwitter, url: 'https://twitter.com/GuillermoVigil' },
    { icon: faFacebook, url: 'https://www.facebook.com/guillermotti' },
    { icon: faGithub, url: 'https://www.facebook.com/guillermotti' },
    { icon: faSpotify, url: 'https://open.spotify.com/user/212losfkqce46ku5l66leqazy' }
  ]

  navigateTo(url: string) {
    window.open(url);
  }

}
