import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(props.pathName);
    }, [props.pathName])

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Folder
        </Typography>
        <Typography variant="h5" component="h2">
        {pathName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Contains Code Files
        </Typography>
     
      </CardContent>
    </Card>
  );
}
