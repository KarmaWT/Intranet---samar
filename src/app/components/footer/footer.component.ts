import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp,} from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faMapMarkerAlt, faPhone, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faPolicy = faBookOpen;

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook,
      faInstagram,
      faLinkedin,
      faWhatsapp,
      faMapMarkerAlt,
      faPhone,
      faBookOpen,
    );
  }

  ngOnInit(): void {}
}
