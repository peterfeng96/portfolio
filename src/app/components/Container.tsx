import styles from "../page.module.css";
import Box from "./Box";

type ContainerProps = {
  list: string[];
};

export default function Container({ list }: ContainerProps) {
  const boxes = list.map((el) => <Box key={el} str={el} />);
  return <div className={styles.container}>{boxes}</div>;
}
