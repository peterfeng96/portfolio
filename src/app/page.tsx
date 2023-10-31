import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ConstructionIcon from "@mui/icons-material/Construction";
import FeedIcon from "@mui/icons-material/Feed";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <div className={styles.introductionLeft}>
          <Typography variant="h1">Peter Feng</Typography>
          <Typography variant="h4">Software Engineer</Typography>
          <div className={styles.description}>
            <div>
              <p>
                I am a full-stack software engineer based in Austin, TX, USA. I
                have a passion turning complex problems into creative and
                innovative solutions.
              </p>
              <p>
                When I&#39;m not immersed in code, you might catch me traveling
                the world in search of the best food.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.introductionRight}>
          <img
            src="/introduction.png"
            alt="introduction image"
            style={{ objectFit: "cover", maxWidth: "80%" }}
          />
        </div>
      </div>
      <div className={styles.links}>
        <List sx={{ display: "flex", flexDirection: "row", flex: "1" }}>
          <ListItem disableGutters>
            <ListItemButton component="a" href="/projects">
              <ListItemIcon>
                <ContentCutIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="my projects"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton component="a" href="/skills">
              <ListItemIcon>
                <ConstructionIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="my skills"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              component="a"
              href="Peter_Feng_Resume.pdf"
              target="_blank"
            >
              <ListItemIcon>
                <FeedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="my resume"></ListItemText>
            </ListItemButton>
          </ListItem>
          {/* <ListItem disableGutters>
            <ListItemButton component="a" href="/aboutme">
              <ListItemIcon>
                <PersonAddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="more about me"></ListItemText>
            </ListItemButton>
          </ListItem> */}
        </List>
      </div>
    </main>
  );
}
