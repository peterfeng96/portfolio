import styles from "../page.module.css";
import { Typography } from "@mui/material";

type TitleProps = {
  str: string;
};

export default function Title({ str }: TitleProps) {
  return (
    <div className={styles.title}>
      <Typography variant="h3">{str}</Typography>
    </div>
  );
}
