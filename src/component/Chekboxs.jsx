import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function ControlledCheckbox() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if(!checked)
    {
        console.log('Kutucuk İşaretlendi');
    }
    else
    {
        console.log('Kutucuk İşareti Kaldırıldı');
    }
    console.log(checked)
};
  

  return (
    <div style={{display:'flex', justifyContent:'center'
    ,flexDirection:'column',alignItems:'center'}}>
        <p>Checkbox</p>
    <Checkbox
      checked={checked}
      onChange={handleChange}
      slotProps={{
        input: { 'aria-label': 'controlled' },
      }}
      
    />
    </div>
  );
}