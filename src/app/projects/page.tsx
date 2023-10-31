"use client";
import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import styles from "../page.module.css";
import projects from "../data/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import Title from "../components/Title";
import Tag from "../components/Tag";
export default function Projects() {
  const [project, setProject] = useState("watchdogs");

  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <div className={styles.projectsLeft}>
          <Title str={projects[project].name} />
          <div className={styles.projectsImages}>
            <img src={`${project}1.png`} />
            <img src={`${project}2.png`} />
          </div>
          <p>{projects[project].description}</p>
          <div className={styles.projectsBuiltWith}>
            {projects[project].builtWith.map((tech) => (
              <Tag key={`${project}${tech}`} str={tech} />
            ))}
          </div>
          <List sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <ListItem>
              <ListItemButton
                className={styles.pop}
                component="a"
                href={projects[project].site}
                target="_blank"
              >
                <ListItemIcon>
                  <PublicIcon color="primary"></PublicIcon>
                </ListItemIcon>
                <ListItemText primary="View Site" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                className={styles.pop}
                component="a"
                href={projects[project].github}
                target="_blank"
              >
                <ListItemIcon>
                  <GitHubIcon color="primary"></GitHubIcon>
                </ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className={styles.projectsRight}>
          <Title str="Projects" />
          <List>
            <ListItem>
              <ListItemButton
                className={styles.pop}
                onClick={() => setProject("watchdogs")}
              >
                <ListItemText primary="WatchDogs" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                className={styles.pop}
                onClick={() => setProject("nftTracker")}
              >
                <ListItemText primary="NFT Tracker" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                className={styles.pop}
                onClick={() => setProject("marathonTrainer")}
              >
                <ListItemText primary="Marathon Trainer" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </div>
    </main>
  );
}
