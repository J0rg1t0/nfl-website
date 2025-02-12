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
    created_at: Date;
}

export interface News {
    id: number;
    title: string;
    content: string;
    image: string;
    link: Date;
    created_at: Date;
}

export interface Suggestions {
    id: number;
    name: string;
    email: string;
    suggestion: string;
    created_at: Date;
}