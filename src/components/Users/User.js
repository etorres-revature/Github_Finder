import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import Repos from "../Repos/Repos";
import GithubContext from "../../Context/Github/githubContext";

import { Link } from "react-router-dom";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, getUserRepos, repos, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-dark">
        Return to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="User avatar"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>BIOGRAPHY </h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-light my-1">
            {name} GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-success">Followers: {followers}</div>
        <div className="badge badge-dark">Following: {following}</div>
        <div className="badge badge-warning">Public Repos: {public_repos}</div>
        <div className="badge badge-danger">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
