import { Component, OnInit } from '@angular/core';
import { MockService } from './../mock.service'
import { Forms } from '../forms';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {
  show: boolean = false;
  loader: boolean = false;
  tempObj: any;

  usuario: Forms = {
    id: 0,
    nota: '',
    nome: '',
    comentario: ''
  }
  forms: Forms[] = [];

  constructor(
    private mockService: MockService,

  ) { }

  ngOnInit(): void {
    this.mockService.getFormData()
      .subscribe(data =>
        this.forms = data);
  }

  showImg(n: number): void {
    let number = n;
    this.click(number)
    this.usuario.nota = number.toString()
  }

  click(number: number) {
    let img = document.querySelector('#star1')
    img?.setAttribute('src', '/assets/star-empty.png');
    img?.setAttribute('title', 'off');

    let img2 = document.querySelector('#star2')
    img2?.setAttribute('src', '/assets/star-empty.png');
    img2?.setAttribute('title', 'off');

    let img3 = document.querySelector('#star3')
    img3?.setAttribute('src', '/assets/star-empty.png');
    img3?.setAttribute('title', 'off');

    let img4 = document.querySelector('#star4')
    img4?.setAttribute('src', '/assets/star-empty.png');
    img4?.setAttribute('title', 'off');

    let img5 = document.querySelector('#star5')
    img5?.setAttribute('src', '/assets/star-empty.png');
    img5?.setAttribute('title', 'off');

    for (let i = 1; i <= number; i++) {
      let img = document.querySelector('#star' + i)
      if (img?.getAttribute('title') == 'off') {
        img?.setAttribute('title', 'on');
        img?.removeAttribute('src');
        img?.setAttribute('src', '/assets/star-full.png')
      }
    }
  }

  btnAction() {
    this.mockService.addFormData(this.usuario).subscribe(
      success => console.log('sucesso'),
      error => console.error(error),
      () => console.log('request completo')
    );

    this.loader = !this.loader
    setTimeout(() => {
      this.show = !this.show
      this.loader = !this.loader
    }, 2000)
    console.log(this.usuario)
  }
}
