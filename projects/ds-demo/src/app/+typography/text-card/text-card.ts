import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-card',
  imports: [NgClass],
  templateUrl: './text-card.html',
})
export class TextCard {
  label = input.required<string>();

  className = input.required<string>();

  underline = input<boolean>(false);

  protected content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}
