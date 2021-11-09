import { useState } from "react";
import questionsList from "../models/questionsList";

export function getRandomQuestion() {
    const randomQuestion = Math.floor(Math.random() * questionsList.length);

    return randomQuestion;
}