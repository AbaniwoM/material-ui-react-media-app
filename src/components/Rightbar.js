import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "fixed",
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555",
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
    }
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>Online Friends</Typography>
        <AvatarGroup max={6} style={{marginBottom:20}}>
            <Avatar alt="Michael" src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/275435388_3831078993783411_4479604985630701316_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFlZc7eEYFPeZyQedTCAG64MxBtgFgBRH0zEG2AWAFEfb4SIrvpGRk7VqgM7YNwZuiUSBobKImv_0zSsf713jPZ&_nc_ohc=q01GbyU3Re0AX-Nk8Wv&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AT9_ucvBJiy3Dyc8huXtJmcxFWxGOAM4XqsPiJXx-tONIw&oe=6234E867" />
            <Avatar alt="Developers" src="https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/275434663_3832145990343378_742277771237065714_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHeLCtETN6jN6EPGl5P9ZXXG1paDtSouLUbWloO1Ki4tWZl9hQYqgHr1guXui03kmbiQ3f-v23a9kaLxdxRzfzI&_nc_ohc=ExymZh4n97AAX9mv5DG&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&oh=00_AT9_AAxHpwBrWiH5SV1QLmcHyzSUHfNRmj6QWp1A4voYYw&oe=6234908E" />
            <Avatar alt="The SOUL Winners" src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/275226511_3825587387665905_7720439898874702152_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGaznK26cQcGi3SIGuuN8s0_eTqe1jguBP95Op7WOC4E7F-kR1avRL1tKd-FKpjQR1fZIUGcfnY_1XrhsW2lvCQ&_nc_ohc=aUNloB4ufrAAX842Y_3&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AT_R0IUkezlobEVelMXjzq1YxDT7g41GkO61xBji_o3k2g&oe=623487AE" />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar alt="Trevor Henderson" src="https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/275318720_3827406097484034_872537762518992825_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHIWo9FS2iu7ngtUcah-znroHwyPq0FAuKgfDI-rQUC4kf2E_Py6fN_znKCk1XKyOcah60vYbIgFbR4f28dwjZt&_nc_ohc=F9TsxzWmWCUAX-X9Kfu&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&oh=00_AT9_S8F-99yREeI_bL-8ulRt4RwIyPM3sZ1M22EKo0-IYQ&oe=623456F5" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>Gallery</Typography>
        <ImageList rowHeight={100} className={classes.imageList} cols={2} style={{marginBottom:20, width: "20vw"}}>
            <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
                <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt="" />
            </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>Categories</Typography>
        <Link href="#" className={classes.link} variant="body2">
            Tech
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Health
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Music
        </Link>
        <Divider flexItem style={{marginBottom:3}} />
        <Link href="#" className={classes.link} variant="body2">
            Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Life
        </Link>
    </Container>
  );
}

export default Rightbar;
