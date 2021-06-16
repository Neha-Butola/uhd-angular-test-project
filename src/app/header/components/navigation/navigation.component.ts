import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.headerSticky();
  }

  headerSticky() {
    let scrollpos = window.scrollY
    const header = document.querySelector("nav");
    const header_height = header.offsetHeight + 30;
  
    const add_class_on_scroll = () => header.classList.add("fixed-top");
    const remove_class_on_scroll = () => header.classList.remove("fixed-top");
  
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
  
      if (scrollpos >= header_height) { add_class_on_scroll() }
      else { remove_class_on_scroll() }
  
      console.log(scrollpos)
    })
  }
  

}
