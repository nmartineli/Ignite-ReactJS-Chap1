import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'Teste 1',
  description: 'Forms in React',
  link: 'https://github.com/',
};

export function RepositoryList() {
  return (
    <section className="respository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
