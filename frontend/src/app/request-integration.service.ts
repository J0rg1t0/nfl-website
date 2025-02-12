import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { News, Stadium, Suggestions, Team } from "./request-integration.interface";

@Injectable({
  providedIn: 'root'
})
export class RequestIntegrationService {
    constructor(
        private http: HttpClient
    ) {}
    private urlBackendApi = 'http://localhost:3000';
    private urlTeams = `${this.urlBackendApi}/teams`;
    private urlNews = `${this.urlBackendApi}/news`;
    private urlSuggestions = `${this.urlBackendApi}/suggestions`;
    private urlMail = `${this.urlBackendApi}/mail`;
    private urlStadium = `${this.urlBackendApi}/stadium`;

    async getTeams() {
        return await lastValueFrom(this.http.get<Team[]>(this.urlTeams)).then(teams => teams ?? []);

    }

    async getNews() {
        return await lastValueFrom(this.http.get<News[]>(this.urlNews)).then(news => news ?? []);        
    }

    async getSuggestions() {
        return await lastValueFrom(this.http.get<Suggestions[]>(this.urlSuggestions)).then(suggestions => suggestions ?? []);
    }

    async getStadiums() {
        return await lastValueFrom(this.http.get<Stadium[]>(this.urlStadium)).then(stadium => stadium ?? []);
    }

    async postTeam(team: any) {
        return await this.http.post(this.urlTeams, team);
    }

    async postNews(news: any) {
        return await this.http.post(this.urlNews, news);
    }

    async postSuggestion(suggestion: any) {
        return await this.http.post(this.urlSuggestions, suggestion);
    }

    async postMail(mail: any) {
        return await this.http.post(this.urlMail, mail);
    }

    async postStadium(stadium: any) {
        return await this.http.post(this.urlStadium, stadium);
    }

    async deleteTeam(id: number) {
        return await this.http.delete(`${this.urlTeams}/${id}`);
    }

    async deleteNews(id: number) {
        return await this.http.delete(`${this.urlNews}/${id}`);
    }

    async deleteSuggestion(id: number) {
        return await this.http.delete(`${this.urlSuggestions}/${id}`);
    }

    async deleteMail(id: number) {
        return await this.http.delete(`${this.urlMail}/${id}`);
    }

    async deleteStadium(id: number) {
        return await this.http.delete(`${this.urlStadium}/${id}`);
    }

    async updateTeam(id: number, team: any) {
        return await this.http.patch(`${this.urlTeams}/${id}`, team);
    }

    async updateNews(id: number, news: any) {
        return await this.http.patch(`${this.urlNews}/${id}`, news);
    }

    async updateSuggestion(id: number, suggestion: any) {
        return await this.http.patch(`${this.urlSuggestions}/${id}`, suggestion);
    }

    async updateMail(id: number, mail: any) {
        return await this.http.patch(`${this.urlMail}/${id}`, mail);
    }

    async updateStadium(id: number, stadium: any) {
        return await this.http.patch(`${this.urlStadium}/${id}`, stadium);
    }

}


