import { AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography, alpha } from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%",
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        alignItems: "center",
        cursor: "pointer",
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: theme.spacing(2),
    }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Mike Dev
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                MIKE
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase placeholder="Search..." className={classes.input}/>
                <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color="secondary" className={classes.badge}>
                    <Notifications />
                </Badge>
                <Avatar alt="Mike" src="https://scontent.fabb1-1.fna.fbcdn.net/v/t39.30808-6/240663526_3662195387338440_3771717589181595519_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH4crmJ7iJ67TJPI_W1feUYeHdlAErnS1Z4d2UASudLVurXD1qxVWGwk73Cxue02vug5rU6dk_3GK96x0rtUFxr&_nc_ohc=ehAoJD8WbOoAX9ruoJC&_nc_oc=AQmooJbLVpEsKPdPryZixZnQaL15HbBtssJQMy72QRo3Ut85yW4gapSKjznKZAcecLg&_nc_zt=23&_nc_ht=scontent.fabb1-1.fna&oh=00_AT_WSmrN9eMsmlEz_f-unbS9f1OaWYgHSM1qXApiQuBqTA&oe=6233E86F" />
            </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
