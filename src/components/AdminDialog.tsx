import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useProducts } from '../contexts/ProductsContext'
import AdminProductForm from './AdminProductForm'

function AdminDialog() {
  const params = useParams()
  const { products } = useProducts()
  const product = products.find(p => p.id === params.id)

  const handleSave = () => {
    console.log('gå tillbaka till admin')
  }

  return (
    <Dialog fullWidth open>
      <DialogTitle>EDIT / ADD PRODUCT</DialogTitle>
      <DialogContent>
        <DialogContentText>Id</DialogContentText>
        <AdminProductForm product={product} onSave={handleSave} />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}

export default AdminDialog
