import { Box, Button, CardActionArea, Skeleton, styled, SxProps, Theme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Product } from '../../data'
import { useProducts } from '../contexts/ProductsContext'
import AdminDeleteDialog from './AdminDeleteDialog'

interface Props {
  dataProduct: Product
}

export default function ProductCard({ dataProduct }: Props) {
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false)
  const { databaseProducts, setDatabaseProducts } = useProducts()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setLoading(false)
    setError(false)
  }

  const handleError = () => {
    setLoading(false)
    setError(true)
  }

  const handleDelete = () => {
    setOpenDeleteDialog(true)
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  const handleDeleteProduct = (product: Product) => {
    const updatedProducts = databaseProducts.filter(p => p.id !== product.id)
    setDatabaseProducts(updatedProducts)
  }

  return (
    <Card sx={cardStyle} data-cy='product'>
      <Link style={{ textDecoration: 'none' }} to={`/product/${dataProduct.id}`}>
        <StyledCardActionArea>
          <Box sx={{ position: 'relative' }}>
            <Box sx={hatHoverStyle}>View Product</Box>
            <Skeleton
              variant='rounded'
              width={240}
              height={150}
              animation='wave'
              sx={loading || error ? {} : { display: 'none' }}
            />
            <CardMedia
              sx={loading || error ? { display: 'none' } : imageStyle}
              component='img'
              height='150'
              image={dataProduct.image}
              alt={dataProduct.title}
              onLoad={handleLoad}
              onError={handleError}
            />
          </Box>

          <CardContent>
            <Typography sx={priceTagStyle} variant='body2' data-cy='product-price'>
              ${dataProduct.price}
            </Typography>
            <Typography variant='body2' component='div'>
              <span style={{ paddingRight: '0.3rem', fontSize: '0.8rem', fontWeight: '900' }}>
                ID:
              </span>
              <span style={{ fontSize: '0.8rem' }} data-cy='product-id'>
                {dataProduct.id}
              </span>
            </Typography>
            <Typography gutterBottom variant='h5' component='div' data-cy='product-title'>
              {dataProduct.title}
            </Typography>
            <Typography variant='body2' data-cy='product-description'>
              {dataProduct.shortDescription}
            </Typography>
          </CardContent>
        </StyledCardActionArea>
      </Link>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <NavLink to={`/admin/product/${dataProduct.id}`}>
          <Button data-cy='admin-edit-product' sx={{ mb: 2, width: '13rem' }} variant='contained'>
            <Typography variant='body2'>Edit Product</Typography>
          </Button>
        </NavLink>

        <Button
          data-cy='admin-remove-product'
          sx={{ mb: 2, width: '13rem' }}
          variant='contained'
          color='error'
          onClick={handleDelete}
        >
          <Typography variant='body2'>Delete Product</Typography>
        </Button>
      </Box>
      <AdminDeleteDialog
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        handleDelete={handleDeleteProduct}
        dataProduct={dataProduct}
      />
    </Card>
  )
}

const imageStyle: SxProps<Theme> = theme => ({
  objectFit: 'contain',
})

const cardStyle: SxProps<Theme> = theme => ({
  minWidth: 240,
  borderRadius: 2,
  '&:hover': {
    backgroundColor: 'transparent',
  },
})

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  '& .MuiCardActionArea-focusHighlight': {
    backgroundColor: 'transparent',
  },
}))

const hatHoverStyle: SxProps<Theme> = theme => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'transparent',
  color: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: theme.typography.body2.fontFamily,

  '&:hover': {
    background: '#d9d9d977',
    color: 'black',
  },
})

const priceTagStyle: SxProps<Theme> = theme => ({
  border: '1px solid black',
  padding: '0.3rem 0.4rem',
  display: 'inline',
  background: '#D1D1D1',
  position: 'absolute',
  right: '1.5rem',
  top: '8.5rem',
})
