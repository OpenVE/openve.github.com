import React, { useState, useCallback } from "react";
import Search from './Search';
import Results from './Results';

function Home() {
  const [filterText, setFiterText] = useState('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFiterText(event?.target?.value);
  }, []);

  return (
    <div>
      <Search onChange={handleChange} />
      <Results filterText={filterText} />
    </div>
  );
}

export default Home;
