import styles from "./styles.module.scss";
import Host from "../../assets/images/host.png";
import Vote from "../../assets/images/vote.png";
import Chat from "../../assets/images/chat.png";

const Features = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["screenshot-col"]}>
          <img className={styles["screenshot"]} src={Host} alt="host-a-room" />{" "}
        </div>
        <div className={styles["text-col-right"]}>
          <h2 className={styles["heading"]}>Private listening rooms</h2>
          <h3 className={styles["subheading"]}>
            Bring your friends together with the music you love.
          </h3>
        </div>
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["text-col-left"]}>
          <h2 className={styles["heading"]}>Vote on the songs to play</h2>
          <h3 className={styles["subheading"]}>
            Prove you have the best music taste in your friend group!
          </h3>
        </div>
        <div className={styles["screenshot-col"]}>
          <img
            className={styles["screenshot"]}
            src={Vote}
            alt="vote-on-songs"
          />{" "}
        </div>
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["screenshot-col"]}>
          <img className={styles["screenshot"]} src={Chat} alt="chat-friends" />{" "}
        </div>
        <div className={styles["text-col-right"]}>
          <h2 className={styles["heading"]}>Let’em know how you feel</h2>
          <h3 className={styles["subheading"]}>
            Talk to your friends in real time with Live chat.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
