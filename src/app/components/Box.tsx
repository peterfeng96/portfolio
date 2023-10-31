import styles from "../page.module.css";

type BoxProps = {
  str: string;
};

export default function Box({ str }: BoxProps) {
  return <div className={`${styles.box} ${styles.pop}`}>{str}</div>;
}
