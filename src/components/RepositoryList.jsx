import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

const repository = {
  name: 'test repository',
  description: 'test description',
  link: 'https://github.com'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>List of repositories</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}