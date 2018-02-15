import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
	private sub: any;
	name : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  		this.sub = this.route.params.subscribe(params => {
       this.name = params['name']; 
     });
  }

}
