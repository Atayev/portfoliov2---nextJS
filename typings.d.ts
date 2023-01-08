interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt:string
}
interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type:'reference'
    }
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url:string
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    name: string;
    phoneNumber: string;
    role: string;
    heroImage: Image;
    profilePic: Image;
    
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted:date;
    dateEnded: date;
    isCurrentWorkHere: boolean;
    jobTitle: string;
    points: string[]
    technologies:Technology[]
}

export interface Technology extends SanityBody {
    _type: "skill"
    image: Image;
    progress: number;
    title:string;
}
export interface Skill extends SanityBody {
    _type: "skill"
    image: Image;
    progress: number;
    title:string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies:Technology[]
}