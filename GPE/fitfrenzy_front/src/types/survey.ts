export interface Survey {
    type: string;
    question: string;
    options: any[];
    answer: any;
}

export interface SurveyAnswerRequest {
    id_user: string;
    answers: Answers[];   
}

export interface Answers {
    id_question: string;
    answer: string[];
}