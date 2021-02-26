import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../service/app.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;

  constructor( private fb: FormBuilder,
    private route: Router,
    private client: AppService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
  });
  }
  async onSubmit() {


    if (this.form.valid) {

      let data = {
        email: this.form.value.email,
        password: this.form.value.password,
      }

      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login', data).subscribe(

        (response: any) => {
          this.load = true;

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido, has ingresado',
            showConfirmButton: false,
            timer: 3000
          }).then((result) => {
              this.route.navigate( ['/'])
          })

      },
      (error) => {

        console.log(error.status);

      })


    } else {

      console.log("Form error");
    }


  }
}
