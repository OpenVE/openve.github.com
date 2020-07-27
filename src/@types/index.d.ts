declare namespace OpenVE {
  type Group = {
    name: string;
    concept: string;
    programmingLanguage: string;
    link: string;
    collaborators: string[];
  }

  type LangIcons = {
    [name: string]: string;
  }

  type GroupsJSON = {
    icons: LangIcons;
    groups: Group[];
  }
}
