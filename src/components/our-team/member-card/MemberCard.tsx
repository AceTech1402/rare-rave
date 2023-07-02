import React from "react";
import Image from "next/image";
import classes from "./memberCard.module.scss";

import profile from "../../../assets/our-team/member-card/Vector.png";
const MemberCard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cartTitle}>
        <div className={classes.memberImage}>
          <Image
            src={profile}
            alt="member profile picture"
            width={120}
            height={120}
          />
        </div>
        <div className={classes.memberDetail}>
          <p className={classes.memberName}>Name Lastname</p>
          <p className={classes.memberPosition}>Occupation</p>
        </div>
      </div>

      <div className={classes.cartDesc}>
        <p className={classes.desc}>
          Lorem ipsum dolor sit amet. Et Quis culpa ut mollitia esse sit nobis
          voluptas. Aut internos doloremque sit quia aspernatur sed consequatur
          voluptate. Sed galisum enim ea.
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
