// src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { Team } from '../request-integration.interface';
import { RequestIntegrationService } from '../request-integration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterModule, MatSnackBarModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  teams: Team[] = [];

  constructor(private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private requestIntegrationService: RequestIntegrationService) 
    {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      team: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.teams = await this.requestIntegrationService.getTeams();
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
