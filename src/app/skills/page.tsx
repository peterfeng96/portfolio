import styles from "../page.module.css";
import Title from "../components/Title";
import Container from "../components/Container";

export default function Skills() {
  return (
    <main className={styles.main}>
      <div className={styles.skills}>
        <div className={styles.languages}>
          <Title str="Languages"></Title>
          <Container
            list={["TypeScript", "JavaScript", "Python", "HTML", "CSS"]}
          />
        </div>
        <div className={styles.technologies}>
          <Title str="Technologies" />
          <Container
            list={[
              "AWS",
              "React",
              "Redux",
              "Next.js",
              "Node",
              "Express",
              "Docker",
              "Django",
              "Flask",
              "MySQL",
              "PostgresQL",
              "MongoDB",
              "GraphQL",
              "Git",
              "Webpack",
              "Jest",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
