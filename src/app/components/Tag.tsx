import styles from "../page.module.css";

type TagProps = {
  str: string;
};

export default function Tag({ str }: TagProps) {
  return <div className={styles.tag}>{str}</div>;
}
