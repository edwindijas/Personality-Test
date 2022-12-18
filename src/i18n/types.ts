export interface PageLanguage {
    [key: string]: string
}

export interface Language {
    page: {
        home: PageLanguage,
        test: PageLanguage,
        result: PageLanguage
        components: {
            questions: PageLanguage
        }
    }
}