// src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Enviar dados do formulário (aqui você pode integrar com seu backend)
      console.log(this.contactForm.value);
      this.snackBar.open('E-mail enviado com sucesso!', 'Fechar', {
        duration: 3000,
        panelClass: ['snackbar-success']
      });
    }
  }
}
