import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { navItems } from "../../constants/data";
import Headings from "../Repetetive/Headings";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const textStyles = {
    fontSize: "14px",
    fontWeight: "bold",
  };
  return (
    <Box
      bgcolor={"#fff"}
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      borderBottom={"1px solid #e2e3e6"}
    >
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <img
              src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
              alt=""
            />
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            gap={3}
            alignItems={"center"}
          >
            <Box display={"flex"} gap={3}>
              {navItems.map((item) => (
                <Headings
                  key={item.name}
                  text={item.name}
                  styles={textStyles}
                />
              ))}
            </Box>
            <Button
              sx={{
                color: "#fff",
                bgcolor: "#276beb",
                fontWeight: "bolder",
                fontSize: "10px",
                px: 2.5,
                py: 1,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#276beb",
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* -----------------------------mobile view--------------------- */}
          <Box display={{ xs: "flex", md: "none" }}>
            <Menu fontSize="large" onClick={toggleDrawer(true)} />
            <Drawer
              open={openDrawer}
              onClose={toggleDrawer(false)}
              anchor="right"
            >
              <Box mt={2} pr={12} pl={3} pt={3}>
                <Box display={"flex"} gap={3} flexDirection={"column"}>
                  {navItems.map((item) => (
                    <Headings
                      key={item.name}
                      text={item.name}
                      styles={textStyles}
                    />
                  ))}
                </Box>
                <Button
                  sx={{
                    mt: 3,
                    color: "#fff",
                    bgcolor: "#276beb",
                    fontWeight: "bolder",
                    fontSize: "10px",
                    px: 2.5,
                    py: 1,
                    borderRadius: 2,
                    "&:hover": {
                      bgcolor: "#276beb",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
