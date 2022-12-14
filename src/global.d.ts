declare module globalThis {
    var getMockState: (page?: Pages, questions?: Questions[]) => AppState;
    var getMockQuestions: () => Question[];
}