import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

import { Prompt } from '../../models/prompt';


@Component({
  	selector: 'prompt-page',
  	templateUrl: 'prompt-page.html'
})

export class PromptPage {
	prompt: Prompt;
	selected_responses: Set<string>;
	can_go_back: boolean;
	can_go_next: boolean;
	first: boolean;
	last: boolean;
	callback: (responses: Set<string>, forward: boolean) => void;

  	constructor(private navController: NavController, private navParams: NavParams, private viewCtrl: ViewController) {
  		this.selected_responses = new Set();
  		this.callback = navParams.get('callback');
  		this.prompt = navParams.get('prompt');
  		this.first = navParams.get('first');
  		this.last = navParams.get('last');
  		this.can_go_back = !this.first;
  		this.can_go_next = true;
  	}

  	ionViewWillEnter() {
  		this.viewCtrl.showBackButton(!this.can_go_back);
  	}

  	nextText() {
  		return this.last ? 'Finish' : 'Next';
  	}

  	responseSelected = (response, selected) => {
  		if (selected) {
  			this.selected_responses.add(response);
  			
  		} else {
  			this.selected_responses.delete(response);
  		}
  	}


  	backAction(event) {
  		this.callback(this.selected_responses, false);
  	}

  	nextAction(event) {
  		this.callback(this.selected_responses, true);
  	}
  }