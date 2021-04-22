import styles from "./styles.module.scss";
import { Button } from "../button";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../styles/mui";

import {
  primaryFilledBtnStyle,
  whiteHollowBtnStyle,
} from "../../styles/buttons";

const Subscribe = () => {
  return (
    <div className={styles["container"]}>
      <p className={styles["header"]}>
        Join the <mark className={styles["green"]}>next.</mark> revolution
      </p>
      <a
        className={styles["btn-wrap"]}
        target="_blank"
        href="https://airtable.com/shr3qsrHb1d68hjH2"
        rel="noreferrer"
      >
        <MuiThemeProvider theme={theme}>
          <Button
            label="subscribe"
            style={{ ...whiteHollowBtnStyle, width: 160 }}
            hoverStyle={primaryFilledBtnStyle}
            disableStyle={primaryFilledBtnStyle}
          />
        </MuiThemeProvider>
      </a>
    </div>
  );
};

export default Subscribe;
