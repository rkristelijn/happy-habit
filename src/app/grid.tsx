import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const BasicGrid = (props: { x: number; y: number }) => {
  const array = [];

  // generate 65 random numbers between 0 and 16
  for (let i = 0; i < 64; i++) {
    const min = 0;
    const max = 16;
    array.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  const uniqueArray = [...new Set(array)];
  // get only the first elements
  const uniqueArray2 = uniqueArray.splice(0, 16);

  return (
    <>
      <div>
        {JSON.stringify(uniqueArray2)} {uniqueArray2.length}
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item><img src={require(`../assets/negative/${uniqueArray2[0]}.jpeg`)} alt=""></img></Item>
          </Grid>
          <Grid item xs={3}>
          <Item><img src={`assets/negative/${uniqueArray2[1]}.jpeg`} alt=""></img></Item>
          </Grid>
          <Grid item xs={3}>
          <Item><img src={`assets/negative/${uniqueArray2[2]}.jpeg`} alt=""></img></Item>
          </Grid>
          <Grid item xs={3}>
          <Item><img src={`assets/negative/${uniqueArray2[3]}.jpeg`} alt=""></img></Item>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>xs=3</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
