import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  form: FormGroup;
  load2: boolean = true;

  constructor( private fb: FormBuilder,
    private route: Router,
    private client: AppService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nameMas: ['', Validators.required],
      idMas: ['', Validators.required],
      raz: ['', Validators.required],
      ageM: ['', Validators.required],

  });
  }
  async onSubmit() {


    if (this.form.valid) {

      let data = {
        nameMas: this.form.value.nameMas,
        idMas: this.form.value.idMas,
        raz: this.form.value.raz,
        ageM: this.form.value.ageM,
      }

      this.load2 = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/mascota', data).subscribe(

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


