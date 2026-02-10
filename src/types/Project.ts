export type Project = {
  title: string;
  description: string;
  techs: string[];
  githubUrl: string;
  liveUrl?: string;
  logo: string;
  demo: string;
};


export type ProjectCardProps = {
    title: string;
    description: string;
    techs: string[];
    githubUrl: string;
    logo: string;
    demoVideo?: string;
    liveUrl?: string;
};