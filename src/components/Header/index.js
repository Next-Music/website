import styles from "./styles.module.scss";
import NextLogo from "../../assets/logos/next.png";

const Header = () => {
  return (
    <header>
      <div className={styles["container"]}>
        <img className={styles["next-logo"]} src={NextLogo} alt="next-logo" />
      </div>
    </header>
  );
};

export default Header;
