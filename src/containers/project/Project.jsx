import React, { useState, useEffect } from 'react';
import ApolloClient, { gql } from 'apollo-boost';

import './Project.css';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import Button from '../../components/button/Button';
import { openSource } from '../../static/portfolio';

const ProjectContainer = () => {
  const [repo, setrepo] = useState([]);

  const setrepoFunction = (array) => {
    setrepo(array);
  };

  const getRepoData = () => {
    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${openSource.githubUserName}") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
      });
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v) => <GithubRepoCard repo={v} key={v.node.id} />)}
      </div>
      <Button
        text="More Projects"
        className="project-button"
        href="https://github.com/michaelkazman"
        newTab
      />
    </div>
  );
};

export default ProjectContainer;
