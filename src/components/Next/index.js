import styles from "./styles.module.scss";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/listening-to-music.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Next = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["left-col"]}>
          <div className={styles["lottie"]}>
            <Lottie
              isClickToPauseDisabled={true}
              options={defaultOptions}
              style={{
                marginBottom: -20,
                marginTop: -20,
                width: "100%",
                maxWidth: 225,
              }}
            />
          </div>
        </div>
        <div className={styles["right-col"]}>
          <h1 className={styles["title"]}>next.</h1>
          <h2 className={styles["subtitle"]}>true interactive listening</h2>
        </div>
      </div>
    </div>
  );
};

export default Next;
