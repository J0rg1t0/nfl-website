export interface Team {
    id: number;
    name: string;
    idStadium: number;
    capacity: number;
    city: string;
    superBowls: number;
    conferenceChampionships: number;
    legendaryPlayers: string;
    logo: string;
    headCoach: string;
    owner: string;
    quarterback: string;
    website: string;
    stadium: Stadium;
}

export interface Stadium {
    id: number;
    name: string;
    city: string;
    state: string;
    capacity: number;
    inaugurationDate: string;
    playingSurface: string;
    roofType: string;
    stadiumType: string;
    image: string;
    image2: string;
    image3: string;
    teams: Team[];
}

export interface News {
    id: number;
    title: string;
    content: string;
    image: string;
    link: string;
    date: string;
}

export interface Suggestions {
    id: number;
    name: string;
    email: string;
    suggestion: string;
    created_at: Date;
}