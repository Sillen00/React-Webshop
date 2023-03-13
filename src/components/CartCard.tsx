import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Box, Button, Paper, SxProps, Theme, Typography } from '@mui/material'
import { CSSProperties } from 'react'
import { products } from '../../data'

function CartCard() {
  return (
    <Paper elevation={3} sx={{ borderRadius: '0.8rem' }}>
      <Box
        data-cy='cart-item'
        sx={{
          display: 'flex',
          maxHeight: '100px',
          '@media (min-width: 900px)': { maxHeight: '150px' },
        }}
      >
        <Box sx={{ width: '100px', '@media (min-width: 900px)': { width: '150px' } }}>
          <img style={cardImgStyle} src={products[0].image} alt={products[0].description} />
        </Box>
        <Box sx={cartCardRightBoxStyleSx}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant='h3'
              sx={{ fontSize: '1.5rem', '@media (min-width: 900px)': { fontSize: '2rem' } }}
            >
              {products[0].title}
            </Typography>
            <Typography
              sx={{ position: 'relative', top: '0', '@media (min-width: 900px)': { top: '50px' } }}
            >
              <DeleteOutlineIcon
                color='error'
                sx={{ '@media (min-width: 900px)': { fontSize: '2rem' } }}
              />
            </Typography>
          </Box>
          <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='body2' color='secondary.dark' sx={descriptionTextStyleSx}>
              {'$30'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {'Black'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp;
              {'M'}
            </Typography>
            <Box sx={quantityBoxStyleSx}>
              <Button
                data-cy='decrease-quantity-button'
                variant='contained'
                color='secondary'
                sx={changeQuantityBtnStyleSx}
              >
                <Typography variant='body2' sx={{ fontWeight: '800' }}>
                  -
                </Typography>
              </Button>
              <Typography data-cy='product-quantity' variant='body2' sx={quantityStyleSx}>
                2
              </Typography>
              <Button
                data-cy='increase-quantity-button'
                variant='contained'
                color='secondary'
                sx={changeQuantityBtnStyleSx}
              >
                <Typography variant='body2' sx={{ fontWeight: '800' }}>
                  +
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant='body2' sx={productTotalStyleSx}>
              Total $60
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

const cartCardRightBoxStyleSx: SxProps<Theme> = theme => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  py: 1,
  pr: 2,
  pl: 1,
})
const descriptionTextStyleSx: SxProps<Theme> = theme => ({
  fontWeight: '700',
  fontSize: '0.8rem',
  '@media (min-width: 900px)': { fontSize: '1rem' },
})
const quantityBoxStyleSx: SxProps<Theme> = theme => ({
  display: 'flex',
  gap: '5px',
  position: 'relative',
  top: '28px',
  '@media (min-width: 900px)': { top: '10px', right: '245px', gap: '10px' },
})
const quantityStyleSx: SxProps<Theme> = theme => ({
  fontWeight: '800',
  fontSize: '1.2rem',
  '@media (min-width: 900px)': { fontSize: '1.4rem' },
})
const changeQuantityBtnStyleSx: SxProps<Theme> = theme => ({
  width: '1.4rem',
  height: '1.4rem',
  p: 0,
  minWidth: 0,
  position: 'relative',
  top: '2px',
  '@media (min-width: 900px)': {
    width: '1.6rem',
    height: '1.6rem',
    top: '4px',
  },
})
const productTotalStyleSx: SxProps<Theme> = theme => ({
  fontSize: '1rem',
  fontWeight: '800',
  '@media (min-width: 900px)': { fontSize: '1.2rem' },
})

const cardImgStyle: CSSProperties = {
  height: '100%',
  borderRadius: '0.8rem',
}

export default CartCard
