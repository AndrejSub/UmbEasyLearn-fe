export interface FlashCards {
    Id:number;
    question:string;
    answer: string;
}

export interface TextQuestions {
    textqv_id:number;
    question:string;
    answer: string;
}

export interface PracticalQuestions {
    uloha_id:number;
    zadanie:string;
    zdroje:string;
    riesenie: string;
}

export interface AbcQuestions {
    questionID:number;
    a:string;
    b: string;
    c: string;
    question: string;
    correctAnswer: string;
}



export interface FlashCards {
    Id:number;
    question:string;
    answer: string;
}

export interface testsDto {
    _id: string;
    testName: string;
    testID: string;
    subjectID: string;
    flashCards: FlashCards[];
    textQuestions: TextQuestions[];
    practicalQuestions: PracticalQuestions[];
    abcQuestions: AbcQuestions[]
}

export interface resultDto {
    "email": string,
    "testID": string,
    "subjectId": string,
    "testName": string,
    "subjectName": string,
    "correctAnswers": string,
    "questionsCount": string
}
