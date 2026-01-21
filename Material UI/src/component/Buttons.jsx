import Button from '@mui/material/Button';
import Box from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import AlarmIcon from '@mui/icons-material/Alarm';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloudUploadIcon from '@mui/icons-material/AddShoppingCart';
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function Buttons() {
    return (
        <div>
            <p style={{textAlign:'center'}}>Grid ile Buttonlar sarmalandı</p>
            <Box 
        sx={{
          display: 'grid',
          // xs (mobil) için 1 sütun, sm (tablet/pc) ve üzeri için 3 eşit sütun
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, 
          gap: 2, // Elemanlar arası boşluk (Stack'teki spacing gibi)
          alignItems: 'center', // Dikeyde ortalar
          justifyItems: 'center' // Yatayda ortalar (İsteğe bağlı, sola yaslamak istersen sil)
        }}
      >
               {/* Basıc Buttons */}
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                {/* Text Buttons */}
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
                {/* Outlined Button */}
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" href="#outlined-buttons">
                    Link
                </Button>
                {/* Colors */}
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
                {/* Clickable Button */}
                <Button
                    onClick={() => {
                        alert('clicked');
                    }}
                >
                    Click me
                </Button>
                {/* Icon içeren Butonlar */}
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                <IconButton aria-label="delete">
  <DeleteIcon />
  {/* Icon şeklinde butonlar */}
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
{/* Badge içeren Butonlar ( Bildirim ) */}
<IconButton>
  <ShoppingCartIcon fontSize="small" />
  <CartBadge badgeContent={2} color="primary" overlap="circular" />
</IconButton>
{/* Upload Butonu */}
<Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={(event) => console.log(event.target.files)}
    multiple
  />
</Button>
            </Box>
        </div>
    )
}
