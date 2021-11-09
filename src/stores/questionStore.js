import { makeAutoObservable } from 'mobx'
import { Question } from '../models/question';
import questionsList from '../models/questionsList';

export class QuestionStore {
    questions = [];

    constructor(rootStore) {
        makeAutoObservable(this, {
            getRandomQuestion: false
        });
        this.rootStore = rootStore;
        this.loadQuestions();
    }

    loadQuestions() {
        console.log('Loading questions...');

        questionsList.forEach((questionData) => {
            var question = new Question(this);
            question.updateFromMap(questionData);
            this.questions.push(question);
        });

        console.log(this.questions.length + ' questions loaded.');
    }

    getRandomQuestion() {
        const questionIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[questionIndex];
    }
}