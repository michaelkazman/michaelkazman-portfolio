/* eslint-disable no-plusplus */
const openSource = {
  githubConvertedToken: "Your Github Token Here.",
  githubUserName: "Your Github Username Here.",
};

const fetch = require("node-fetch");
const fs = require("fs");

const queryPr = {
  query: `
query {
  user(login: "${openSource.githubUserName}"){
    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
      mergedBy {
          avatarUrl
          url
          login
      }
      createdAt
      number
        changedFiles
      additions
      deletions
        baseRepository {
          name
          url
          owner {
            avatarUrl
            login
            url
          }
        }
      }
    }
}
}
`,
};

const queryIssue = {
  query: `query{

user(login: "${openSource.githubUserName}") {
    issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }

}`,
};

const queryOrg = {
  query: `query{
  user(login: "${openSource.githubUserName}") {
    repositoriesContributedTo(last: 100){
      totalCount
      nodes{
        owner{
          login
          avatarUrl
          __typename
        }
      }
    }
  }
}`,
};

const queryPinnedProjects = {
  query: `
query { 
  user(login: "${openSource.githubUserName}") { 
    pinnedItems(first: 6, types: REPOSITORY) {
      totalCount
      nodes{
        ... on Repository{
          id
          name
          createdAt,
          url,
          description,
          isFork,
          languages(first:10){
            nodes{
              name
            }
          }
        }
      }
  }
  }
}
`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: `bearer ${openSource.githubConvertedToken}`,
};

fetch(baseUrl, {
  method: "POST",
  headers,
  body: JSON.stringify(queryPr),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const cropped = { data: [] };
    cropped.data = data.data.user.pullRequests.nodes;

    let open = 0;
    let closed = 0;
    let merged = 0;
    for (let i = 0; i < cropped.data.length; i++) {
      if (cropped.data[i].state === "OPEN") open++;
      else if (cropped.data[i].state === "MERGED") merged++;
      else closed++;
    }

    cropped.open = open;
    cropped.closed = closed;
    cropped.merged = merged;
    cropped.totalCount = cropped.data.length;

    fs.writeFile(
      "./src/static/opensource/pull_requests.json",
      JSON.stringify(cropped)
    );
  });

fetch(baseUrl, {
  method: "POST",
  headers,
  body: JSON.stringify(queryIssue),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const cropped = { data: [] };
    cropped.data = data.data.user.issues.nodes;

    let open = 0;
    let closed = 0;
    for (let i = 0; i < cropped.data.length; i++) {
      if (cropped.data[i].closed === false) open++;
      else closed++;
    }

    cropped.open = open;
    cropped.closed = closed;
    cropped.totalCount = cropped.data.length;

    fs.writeFile(
      "./src/static/opensource/issues.json",
      JSON.stringify(cropped)
    );
  });

fetch(baseUrl, {
  method: "POST",
  headers,
  body: JSON.stringify(queryOrg),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const orgs = data.data.user.repositoriesContributedTo.nodes;
    const newOrgs = { data: [] };
    for (let i = 0; i < orgs.length; i++) {
      const obj = orgs[i].owner;
      // eslint-disable-next-line no-underscore-dangle
      if (obj.__typename === "Organization") {
        let flag = 0;
        for (let j = 0; j < newOrgs.data.length; j++) {
          if (JSON.stringify(obj) === JSON.stringify(newOrgs.data[j])) {
            flag = 1;
            break;
          }
        }
        if (flag === 0) {
          newOrgs.data.push(obj);
        }
      }
    }

    fs.writeFile(
      "./src/static/opensource/organizations.json",
      JSON.stringify(newOrgs)
    );
  });

const languageIcons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
};

fetch(baseUrl, {
  method: "POST",
  headers,
  body: JSON.stringify(queryPinnedProjects),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    const projects = data.data.user.pinnedItems.nodes;
    const newProjects = { data: [] };
    for (let i = 0; i < projects.length; i++) {
      const obj = projects[i];
      const langobjs = obj.languages.nodes;
      const newLangobjs = [];
      for (let j = 0; j < langobjs.length; j++) {
        if (langobjs[j].name in languageIcons) {
          newLangobjs.push({
            name: langobjs[j].name,
            iconifyClass: languageIcons[langobjs[j].name],
          });
        }
      }
      obj.languages = newLangobjs;
      newProjects.data.push(obj);
    }

    fs.writeFile(
      "./src/static/opensource/projects.json",
      JSON.stringify(newProjects)
    );
  });
