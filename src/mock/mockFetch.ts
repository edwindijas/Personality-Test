
import { MockQuestions } from "./Questions.mock";

export default async function mockFetch(url: RequestInfo | URL): Promise<Response> {
    if(url.toString().endsWith('/api/questions.json')) {
        const resp = {
            ok: true,
            status: 200,
            json: async () => ({ data: MockQuestions}),
        }

        return resp as Response;
    }

    throw new Error(`Unhandled request: ${url}`);        
}