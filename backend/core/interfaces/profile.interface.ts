export interface Education {
  school: string;
  major: string;
  period: string;
}

export interface Organization {
  name: string;
  role: string;
  period: string;
  description: string;
}

export interface ProfileEntity {
  name: string;
  nickname: string;
  bio: string;
  education: Education[];
  organizations: Organization[];
  skills: string[];
}