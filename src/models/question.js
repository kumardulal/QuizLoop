import {makeAutoObservable} from 'mobx'

export class Question {
    imageUrl = ''
    options = []
    answer = ''

    constructor(store) {
        makeAutoObservable(this, {
            store: false
        })

        this.store = store
    }

    updateFromMap(map) {
        this.imageUrl = map.imageUrl
        this.answer = map.answer
        this.options = map.options
    }
}