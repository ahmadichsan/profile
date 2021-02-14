export interface ProjectModel {
  id: string;
  name: string;
  language: string;
  description: string;
  repositoryLink: string;
  repositoryLocation: string;
  createdBy: string;
  createdDate: string;
  lastUpdatedBy: string | null;
  lastUpdatedDate: string | null;
  activeFlag: boolean;
  projectImageLink: string;
  projectImageName: string;
  year: Date;
}
