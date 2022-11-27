import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import MenuIcon from "@mui/icons-material/Menu";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <Head title="Welcome" />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            {props.auth.user ? (
              <Link href={route("dashboard")}>
                <Button color="inherit">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link href={route("login")}>
                  <Button color="inherit">Login</Button>
                </Link>
                <Link href={route("register")}>
                  <Button color="inherit">Register</Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {props.posts.map((item, index) => (
        <Card sx={{ minWidth: 275 }} key={index}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.slug}
            </Typography>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            {/* <Typography variant="body2" dangerouslySetInnerHTML={{__html: item.body}}></Typography> */}
            <p dangerouslySetInnerHTML={{__html: item.body}}></p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Home;
