import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-and-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-and-chat.component.html',
  styleUrls: ['./feedback-and-chat.component.scss']
})
export class FeedbackAndChatComponent {
  showMsg: boolean = false;
  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    fullname: '',
    email: '',
    comments: ''
  });

  onSubmit(): void {
    console.log('Your feedback has been submitted', this.contactForm.value);
    this.showMsg = true;
    this.contactForm.reset();
  }
}
