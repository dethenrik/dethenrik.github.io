import { Component, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-beviser',
  templateUrl: './beviser.component.html',
  styleUrls: ['./beviser.component.css']
})
export class BeviserComponent {
  constructor(private el: ElementRef){}

  @HostListener('click')
  imagechange(){
    var src:any = this.el.nativeElement.src;
    var prev:any = document.getElementById("preview");
    prev.src = src;
    var imageSlide = document.getElementsByClassName("img-slide");
    for(let i=0; i<imageSlide.length; i++){
      imageSlide[i].classList.remove("active");
    }
    this.el.nativeElement.parentElement.classList.add("active")
  }
}
