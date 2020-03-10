import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFormGroup:FormGroup;
  formJsonData:Array<Object>;

  title = 'dynamic-form-angular';

  constructor(){
    this.formJsonData=[
      {
          "form_element": "input",
          "optional": false,
          "type": "text",
          "label": "First name",
          "place_holder": "Enter First Name",
          "icon": ""
      },
      {
          "form_element": "input",
          "optional": false,
          "type": "text",
          "label": "Last name",
          "place_holder": "Enter Last Name",
          "icon": ""
      },
      {
          "form_element": "input",
          "optional": false,
          "type": "text",
          "label": "Username",
          "place_holder": "UserName",
          "icon": "@"
      },
      {
          "form_element": "input",
          "optional": true,
          "type": "text",
          "label": "Email (Optional)",
          "place_holder": "Enter First Name",
          "icon": ""
      },
      {
          "form_element": "input",
          "optional": false,
          "type": "text",
          "label": "Address",
          "place_holder": "1234 Main St",
          "icon": ""
      },
      {
          "form_element": "input",
          "optional": true,
          "type": "text",
          "label": "Address 2",
          "place_holder": "1234 Main St",
          "icon": ""
      },
      {
          "form_element": "input",
          "optional": true,
          "type": "dropdown",
          "options": [
              {
                  "label": "Country A",
                  "value": 1
              },
              {
                  "label": "Country A",
                  "value": 1
              },
              {
                  "label": "Country B",
                  "value": 1
              },
              {
                  "label": "Country C",
                  "value": 1
              },
              {
                  "label": "Country D",
                  "value": 1
              }
          ],
          "label": "Country",
          "place_holder": "Choose...",
          "icon": ""
      },
      {
          "form_element": "input",
          "optional": true,
          "type": "dropdown",
          "options": [
              {
                  "label": "State A",
                  "value": 1
              },
              {
                  "label": "State A",
                  "value": 1
              },
              {
                  "label": "State B",
                  "value": 1
              },
              {
                  "label": "State C",
                  "value": 1
              },
              {
                  "label": "State D",
                  "value": 1
              }
          ],
          "label": "State",
          "place_holder": "Choose...",
          "icon": ""
      },
      {
          "form_element": "input",
          "optional": true,
          "type": "text",
          "label": "Zip",
          "place_holder": "",
          "icon": ""
      }
  ]
  }

  ngOnInit() {
    let group={}    
    this.formJsonData.forEach(input_template=>{
      group[input_template['label']]=new FormControl('');  
    })
    this.myFormGroup = new FormGroup(group);
  }
  onSubmit(){
    console.log(this.myFormGroup.value);
  }
}

