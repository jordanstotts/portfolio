import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";


const Skills = () => {
    return (
    <div>
      <Home />
      <p>Here are a few skills and frameworks I've worked with in the past</p>
          <div >
              <img className="skill-logo" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" alt="html"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png" alt="css"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" alt="javascript"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png" alt="react"/>
              <img className="skill-logo" src="https://docs.microsoft.com/cs-cz/windows/images/nextjs-logo.png" alt="next js"/>
              <img className="skill-logo" src="https://antman.info/images/news/logo.bootstrap.png" alt="bootstrap"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png" alt="node"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="mongoDB"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/express-8-1175029.png" alt="express"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/heroku-225989.png" alt="heroku"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/django-2-282855.png" alt="django"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png" alt="aws"/>
              <img className="skill-logo" src="https://s28309.pcdn.co/wp-content/themes/321-web-marketing/assets/images/api-logo-256.png" alt="rest api"/>
              <img className="skill-logo" src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png" alt="postgreSQL"/>
          </div>
    </div>
  );
};

export default Skills;
