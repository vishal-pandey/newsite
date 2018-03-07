import { Component, OnInit } from '@angular/core';
import { tween, styler } from 'popmotion';

// import $ = require("jquery");
// import * as $ from "jquery"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  constructor() {
  }

  // hi(){
  // 	$('.hi').click(function(){
  // 		$(this).animate({
  // 			height: '200px',
  // 			width: '200px',
  // 			borderRadius: '200px',
  // 			fontSize: '50px'

  // 		},function(){
  // 			$(this).animate({
  // 				borderRadius: '100px',
  // 				height: '100px',
	 //  			width: '100px',
	 //  			fontSize: '28px'
  // 			})
  // 		})

  // 	})
  // }
  // appear(){
  // 	$('.hi').click(function(){
  		
  // 		$('.service1').animate({
  // 			// display: 'initial',
  // 			fontSize: '18px',
  // 			height: '200px',
  // 			width: '200px'
  // 		},function(){
  // 			$(this).animate({
  // 				borderRadius: '100px',
  // 				height: '100px',
	 //  			width: '100px'
  // 			})
  // 		})
  // 	})
  // }

  ngOnInit() {
  	// this.hi()
  	// this.appear()
  }

}
