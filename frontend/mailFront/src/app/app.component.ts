// import the Component decorator from @angular/core then we use it to decorate the TypeScript class AppComponent
import { Component } from '@angular/core';

@Component({  //The Component decorator takes an object with many parameters such as:
  // selector: specifies the tag that can be used to call this component in HTML templates just like the standard HTML tags
  selector: 'app-root',
  
  // templateUrl: indicates the path of the HTML template that will be used to display this component (you can also use the template parameter to include the template inline as a string)
  templateUrl: './app.component.html',
  
  // styleUrls: specifies an array of URLs for CSS style-sheets for the component
  styleUrls: ['./app.component.css']
})
// The export keyword is used to export the component so that it can be imported from other components and modules in the application.
export class AppComponent {

  title = 'mailFront';
}
