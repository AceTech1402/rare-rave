import React from "react";
import classes from "./teamCard.module.scss";
const TeamInfoCard = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <p className={classes.teamName}>RR Team</p>
        </div>

        <div>
          <p className={classes.teamInfo}>
            Lorem ipsum dolor sit amet. Et Quis culpa ut mollitia esse sit nobis
            voluptas. Aut internos doloremque sit quia aspernatur sed
            consequatur voluptate. Sed galisum enim ea velit voluptatibus qui
            repellendus quaerat ea quam commodi non quidem odit?
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamInfoCard;
