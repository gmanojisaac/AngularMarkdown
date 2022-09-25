import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularComp';

  someothervar=`
  ## Markdown from component no code __works__!
  ---
  `;
  somevar=`
  ## Markdown from component with typescript __works__!
  ---
  `;
  markdowncode=`
  ## Markdown from component __works__!
  ---
  `;
}
