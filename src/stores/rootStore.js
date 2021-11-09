import { QuestionStore } from "./questionStore";
import { QuizStore } from "./quizStore";

class RootStore {
    constructor() {
        this.questionStore = new QuestionStore(this);
        this.quizStore = new QuizStore(this, this.questionStore);
    }
}

export default new RootStore();