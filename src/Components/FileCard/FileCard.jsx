import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 175,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 8,
  },
});

export default function SimpleCard(props) {
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        setFileName(props.fileName);
    }, [props.fileName])

  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          File
        </Typography>
        <Typography variant="h5" component="h2">
        {fileName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          C++ Code File
        </Typography>
     
      </CardContent>
    </Card>
  );
}
