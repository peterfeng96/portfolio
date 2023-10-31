"use client";
import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import styles from "../page.module.css";
import BasicMenu from "./BasicMenu";

export default function ButtonAppBar() {
  return (
    <Box position="fixed" sx={{ width: "100%", zIndex: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            className={styles.pop}
            href="/"
            style={{ textDecoration: "none" }}
          >
            <img src="/icon.png" alt="icon" height="64px" />
          </Link>
          <List sx={{ display: "flex", flexDirection: "row" }}>
            <ListItem disableGutters>
              <ListItemButton
                component="a"
                href="https://www.linkedin.com/in/peterfeng96/"
                target="_blank"
                disableGutters
              >
                <ListItemIcon>
                  <LinkedIn color="primary" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                component="a"
                href="https://github.com/peterfeng96"
                target="_blank"
                disableGutters
              >
                <ListItemIcon>
                  <GitHub color="primary" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton
                component="a"
                href="mailto:peterfeng96@gmail.com"
                target="_blank"
                disableGutters
              >
                <ListItemIcon>
                  <Email color="primary" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton disableGutters>
                <ListItemIcon>
                  <BasicMenu />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
