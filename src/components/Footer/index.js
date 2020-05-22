import React from "react";
import useStyles from "./footer.styles";
import githubImg from "../../../assets/github.png";
import phone from "../../../assets/phone.png";
import mail from "../../../assets/mail.png";

function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.divider}></div>
      <div className={classes.container}>
        <div className={classes.itemContainer}>
          <div className={classes.footerItem}>
            <h2>About the App</h2>
            <p>
              This app was created by Hitesh Parashar to demonstrate the web
              development skills and to qualify for a self paced training
              program organized by Publicis Sapient learning team. The app was
              created from scratch to include only the specific features pertaining
              to the need of the project. The souce code and related items are
              available on the github account.
            </p>
          </div>
          <div className={classes.footerItem}>
            <h2>Contact</h2>
            <div>
              <img src={mail} />
              <span>hitesh.parashar@publicissapient.com</span>
            </div>
            <div>
              <img src={phone} />
              <span>9582420998</span>
            </div>
            <div>
              <img src={githubImg} />
              <span>
                <a href="https://github.com/hiteshparashar4/" target="_blank">
                  View Github profile
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
