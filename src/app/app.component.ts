import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  title = 'linktree';
  colorIcon: any = '#fff';
  socialPages = [
    {
      "socialMedia": "instagram",
      "link": "https://www.instagram.com/pedrusoad",
      "iconClass": "fa-brands fa-instagram",
      "color": "pink"
    },    
    {
      "socialMedia": "twitter",
      "link": "https://www.twitter.com/pedros0ad",
      "iconClass": "fa-brands fa-twitter",
      "color": "blue"
    },
    {
      "socialMedia": "twitch",
      "link": "https://www.twitch.tv/pedrusoad",
      "iconClass": "fa-brands fa-twitch",
      "color": "purple"
    },
    {
      "socialMedia": "whatsapp",
      "link": "https://api.whatsapp.com/send?phone=5562981819228",
      "iconClass": "fa-brands fa-whatsapp",
      "color": "green"
    },
    {
      "socialMedia": "tiktok",
      "link": "https://www.tiktok.com/@pedrosoad",
      "iconClass": "fa-brands fa-tiktok",
      "color": "white"
    },
    {
      "socialMedia": "youtube",
      "link": "https://www.youtube.com/@pedrusoad",
      "iconClass": "fa-brands fa-youtube",
      "color": "red"
    }
  ]

  onMouseEnter(x: any) {
    this.colorIcon = x.color
    console.log(x)
  }

  onMouseLeave(x: any) {
    this.colorIcon = '#fff'
  }

  ngOnInit(): void {
    console.log(this.socialPages)
  }
}