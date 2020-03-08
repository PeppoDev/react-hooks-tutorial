import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RepoList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadRepo() {
      const response = await axios.get(
        "https://api.github.com/users/Peppoderosa/repos"
      );
      setRepos(response.data);
    }
    loadRepo();
  }, []);

  useEffect(() => {
    const filtered = repos.filter(repo => repo.favorite);
    document.title = `Você tem (${filtered.length}) favoritos`;
  }, [repos]);

  function handleFavorite(id) {
    const newRepositories = repos.map(repo =>
      repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    );
    setRepos(newRepositories);
  }

  return (
    <>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
