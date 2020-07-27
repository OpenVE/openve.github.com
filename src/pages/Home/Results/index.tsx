import React, { useState, useEffect, useMemo } from "react";
import Group from './Group';
import ContentFrame from '../../../components/ContentFrame';

type ResultsProps = {
  filterText: string;
}

function Home({ filterText }: ResultsProps) {
  const [groups, setGroups] = useState<OpenVE.Group[]>([]);
  const [icons, setIcons] = useState<OpenVE.LangIcons>({});
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://raw.githubusercontent.com/estebanborai/openve-openve.github.com/migrate/react/static/telegram-groups.json');
      const asJson: OpenVE.GroupsJSON = await data.json();
      console.log(asJson);
      setIcons(asJson.icons);
      setGroups(asJson.groups);
    }

    fetchData();
  }, []);

  const filteredGroups = useMemo(() => {
    if (filterText) {
      return groups.filter((group) => group.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 ||
        group.concept.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
    }

    return groups;
  }, [filterText, groups]);

  return (
    <ContentFrame>
      <ol className="p-4 box-border">
        {
          filteredGroups.map((group: OpenVE.Group, index: number) => (
            <Group
              key={index}
              name={group.name}
              concept={group.concept}
              link={group.link}
              icon={icons[group.programmingLanguage]}
            />
          ))
        }
      </ol>
    </ContentFrame>
  );
}

export default Home;
