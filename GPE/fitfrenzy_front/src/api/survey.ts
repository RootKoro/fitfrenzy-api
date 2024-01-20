import api from '.';
import { Survey, SurveyAnswerRequest } from '../types/survey';


export const fetchSurvey = async (): Promise<Survey | null> => {
    const res = await api(3335).get<Survey>(`/questionaries`);
    return res.data;
}

export const answerSurvey = async (surveyAnswerRequest: SurveyAnswerRequest): Promise<any | null> => {
    const res = await api(3335).post<Survey>(`/questionaries/answer`, surveyAnswerRequest);
    return res.data;
}

export const updateUser = async (id_user: string): Promise<any | null> => {
    const res = await api(3000).put(`/users/${id_user}`, {surveyAnswered: true});
    return res.data;
}