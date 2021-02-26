import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../service/app.service';
import { environment } from '../../environments/environment';

import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: AppService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {


    if (this.form.valid) {

      let data = {
        name: this.form.value.name,
        lastname: this.form.value.lastname,
        phone: this.form.value.phone,
        email: this.form.value.email,
        password: this.form.value.password,
      }
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/registro', data).subscribe(

      //this.load = false;
      //this.client.postRequest(`${environment.BASE_API}/user/login`, data).subscribe(

        (response: any) => {
          this.load = true;

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 3000
          }).then((result) => {
              this.route.navigate( ['/login'])
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

