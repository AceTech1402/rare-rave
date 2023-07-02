import TeamInfoCart from "@/components/our-team/team-card/TeamInfoCard";
import React from "react";
import MemberCard from "../../components/our-team/member-card/MemberCard";
import classes from "./ourTeam.module.scss";
const page = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.teamCart}>
          <TeamInfoCart />
        </div>
        <div className={classes.memberSide}>
          <div className={classes.memberWrapper}>
            {arr.map((val, idx) => (
              <MemberCard key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
