import React from "react";
import Topic from "../components/Topic";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

function About({ match }) {
  return (
    <div id='themeBlack' className="Topic-links">
      <h1>About Page</h1>
      <hr />
      <h4>Brought to you from Team Krusty</h4>
      <div>
        <h2 className="Topic-links">Meet the Coders</h2>
        <ul className="Topic-links">
          <li><Link to={`${match.url}/Noble`}>Lead Back-End product Routing Implementer . . .</Link></li>
          <li><Link to={`${match.url}/Azzam`}>Lead CSS design and Bootstrap Implementer . . .</Link></li>
          <li><Link to={`${match.url}/James`}>Lead Database Migration Implementer . . .</Link></li>
          <li><Link to={`${match.url}/Muhammad`}>Lead Front-End page routing Implementer . . .</Link></li>
          <li><Link to={`${match.url}/Hannah`}>Lead ERM Database Model Implementer . . .</Link></li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route className="Topic-links" exact path={match.url} render={() => <h3 className="Topic-links">Please select a link to see a team member!</h3>} />
      </div>
    </div>
  );
}

export default About;