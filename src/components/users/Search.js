import React, { useState, useContext } from "react";
import GithubContext from "../../Context/Github/githubContext";
import PropTypes from "prop-types";


const Search = ({ newAlert }) => {
  const githubContext = useContext(GithubContext);
  const { users, clearUsers } = githubContext;
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      newAlert("Please enter something to search!", "warning");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          value={text}
          onChange={onChange}
          type="text"
          name="text"
          placeholder="Search for GitHub users ... "
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          CLEAR
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  newAlert: PropTypes.func.isRequired,
};
export default Search;
