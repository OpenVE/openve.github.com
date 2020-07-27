import React, { useState, useEffect } from "react";
import Group from './Group';

function Home() {
  const [groups, setGroups] = useState<OpenVE.Group[] | undefined>(undefined);
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

  return (
    <ol style={{ marginTop: '300px' }}>
      {
        groups ? (groups as unknown as OpenVE.Group[]).map((group: OpenVE.Group, index: number) => (
          <Group
            key={index}
            name={group.name}
            concept={group.concept}
            link={group.link}
            icon={icons[group.programmingLanguage]}
          />
        )) : null
      }
    </ol>
  );
}

export default Home;
