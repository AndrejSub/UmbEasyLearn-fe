import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-panel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-panel.component.html',
    styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
    abcQuestions: any[] = [];
    textQuestions: any[] = [];

    addABC() {
        let questionCount = this.abcQuestions.length;

        let newQuestion = {
            questionNumber: questionCount + 1,
            abcQuestion: '',
            abcCorrect: '',
            abcAnswerA: '',
            abcAnswerB: '',
            abcAnswerC: ''
        };

        this.abcQuestions.push(newQuestion);
    }

    addTextQuestion() {
        let questionCount = this.textQuestions.length;

        let newTextQuestion = {
            questionNumber: questionCount + 1,
            question: '',
            answer: ''
        };

        this.textQuestions.push(newTextQuestion);
    }

    skuska(){
        console.log(this.abcQuestions);
    }
}
