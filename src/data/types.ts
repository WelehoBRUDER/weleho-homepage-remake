export interface IProject {
  [name: string]: any;
  type: string;
  image: string;
  images: string[];
  link: string;
  repo: string;
  status: string;
  contentTime?: number; // in minutes
}
