import { Grid, Container,  } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ProductViews } from '../../ProductView/ProductView';

import { getProducts } from '../../../store/features/shopFeatures'

import './shoppage.css'



function shoppingPage() {
    const dispatch = useDispatch()
    const { products, loading } = useSelector((state) => state.shops)

    useEffect(() => {
      dispatch(getProducts())
    }, [])
 
    if (loading) return <p>Loading...</p>

     return (
        <Container sx={{ py: 8 }} maxWidth="md">
         <Grid container spacing={4}>
            {products.map(item => <ProductViews key={item.id} />)}
            </Grid>
        </Container>
    );
}


export default shoppingPage;
