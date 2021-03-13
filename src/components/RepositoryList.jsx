import '../styles/repositories.scss';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>List of repositories</h1>

      <ul>
        <li>
          <strong>repository name</strong>

          <p>repository description</p>

          <a href="">
            Access repository
          </a>
        </li>

        <li>
          <strong>repository name</strong>

          <p>repository description</p>

          <a href="">
            Access repository
          </a>
        </li>

        <li>
          <strong>repository name</strong>

          <p>repository description</p>

          <a href="">
            Access repository
          </a>
        </li>

        <li>
          <strong>repository name</strong>

          <p>repository description</p>

          <a href="">
            Access repository
          </a>
        </li>
      </ul>
    </section>
  );
}