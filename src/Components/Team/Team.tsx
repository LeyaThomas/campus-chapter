import styles from "./Team.module.css";

import image from "./assets/member.svg";
import line from "./assets/line.svg";
import line2 from "./assets/line2.svg";

const Team = () => {
  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper}>
        <div className={styles.teamBgLineWrapper}>
          <img src={line} alt="" />
          <img src={line2} alt="" />
          <img src={line} alt="" />
          <img src={line2} alt="" />
        </div>
        <div className={styles.teamMembersDetailsWrapper}>
          <div className={`${styles.team} ${styles.team1}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team2}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team3}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team4}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team5}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team6}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team7}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
          <div className={`${styles.team} ${styles.team8}`}>
            <div className={styles.team1Img}>
              <img className="team-image-individual" src={image} />
            </div>
            <div className="team-name-designation">
              <div className="team-member-name">Enric S Neelamkavil</div>
              <div className="team-member-designation">Campus Lead</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
