import { Link as RouterLink } from "react-router-dom";
import { Box, Toolbar, Typography, Button, Container, Theme, IconButton } from "@mui/material";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import LoginButton from "./LoginButton";
import StudyButton from "./StudyButton"

interface NavProps {
  theme: Theme;
  auth: boolean;
  logout(): void;
  toggleColorMode(): void;
}

function Navbar({ theme, auth, logout, toggleColorMode }: NavProps) {
  return (
    <Box sx={{ flexGrow: 1, borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="lg" sx={{ px: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button component={RouterLink} to="/" color="inherit" sx={{ textTransform: "none" }}>
            <DeviceHubIcon />
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              Algong
            </Typography>
          </Button>

          <Box sx={{ display: "flex" }}>
            {auth ? (
              <>
                <StudyButton />
                <Button color="inherit" size="large" sx={{ fontWeight: 800 }} onClick={logout}>
                  ๋ก๊ทธ์์
                </Button>
              </>
            ) : (
              <LoginButton />
            )}
            <IconButton onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Navbar;
