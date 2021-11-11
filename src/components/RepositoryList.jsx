import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/nmartineli/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="respository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository, index) => {
          return <RepositoryItem key={index} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
