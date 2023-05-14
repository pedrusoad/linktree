import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  title = 'linktree';
  socialPages = [
    {
      "socialMedia": "instagram",
      "link": "https://www.instagram.com/pedrusoad",
      "iconClass": "fa-brands fa-instagram",
    },    
    {
      "socialMedia": "Twitter",
      "link": "https://www.twitter.com/pedros0ad",
      "iconClass": "fa-brands fa-twitter",
    },
    {
      "socialMedia": "Twitch",
      "link": "https://www.twitch.tv/pedrusoad",
      "iconClass": "fa-brands fa-twitch",
    },
    {
      "socialMedia": "Whatsapp",
      "link": "https://api.whatsapp.com/send?phone=5562981819228",
      "iconClass": "fa-brands fa-whatsapp",
    },
    {
      "socialMedia": "Tiktok",
      "link": "https://www.tiktok.com/@pedrosoad",
      "iconClass": "fa-brands fa-tiktok",
    },
    {
      "socialMedia": "Youtube",
      "link": "https://www.youtube.com/@pedrusoad",
      "iconClass": "fa-brands fa-youtube",
    }
  ]

  ngOnInit(): void {
    console.log(this.socialPages)
  }
}