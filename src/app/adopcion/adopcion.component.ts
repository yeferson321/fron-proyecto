import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent implements OnInit {

  form: FormGroup;
  load1: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: AppService) {
  }

  ngOnInit(): void {
      this.form = this.fb.group({
      namepet: ['', Validators.required],
      raze: ['', Validators.required],
      ide: ['', Validators.required],
      age:['',Validators.required],
      email: ['', Validators.email],

    });
  }
  async onSubmit() {


    if (this.form.valid) {

      let data = {
        namepet: this.form.value.namepet,
        raze: this.form.value.raze,
        ide: this.form.value.ide,
        age:this.form.value.age,
        email: this.form.value.email,

      }

      this.load1 = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/adopcion', data).subscribe(

        (response: any) => {
          this.route.navigate( ['/mensajeexito']);

      },
      (error) => {

        console.log(error.status);

      })


    } else {

      console.log("Form error");
    }


  }

}
