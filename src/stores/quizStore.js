import { makeAutoObservable } from "mobx"
import questionsList from "../models/questionsList";

export class QuizStore {
    questionStore;
    currentSelection = '';
    currentQuestion = null;
    showAnswer = false;

    score = window.localStorage.getItem('score');

    constructor(rootStore, questionStore) {
        makeAutoObservable(this);

        this.rootStore = rootStore;
        this.questionStore = questionStore;
        this.currentQuestion = questionStore.getRandomQuestion();
    }

    changeSelection(selection) {
        console.log(selection)
        console.log(this.currentSelection)
        this.currentSelection = selection
    }

    isSelected(selection) {
        return this.currentSelection == selection
    }

    submitAnswer(option) {




        if (this.currentQuestion.answer === option) {
            console.log("correct")
            this.showAnswer = true;


            const newScore = Number(this.score)

            // window.localStorage.clear()
            window.localStorage.setItem('score', newScore + 5)

        }
        else {
            this.showAnswer = true;

            const newScore = Number(this.score)

            // window.localStorage.clear()
            window.localStorage.setItem('score', newScore - 2)

        }
        setTimeout(() => {
            location.reload()
        }, 1000);




    }



    isOptionCorrect(option) {
        return this.currentQuestion.answer == option
    }

}
