declare namespace OpenVE {
  type Group = {
    name: string;
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
