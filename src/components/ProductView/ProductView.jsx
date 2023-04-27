import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function ProductViews() {
    return (

             <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{  pt: '56.25%',}}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                    View
                  </Button>
                  <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                    Buy
                  </Button>
                </CardActions>
              </Card> 
        </Grid>
    )
}