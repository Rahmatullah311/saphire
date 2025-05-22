import React from 'react'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Grid2'
import LocaleSwitcher from './LocaleSwitcher'

const MUIToolbarActionsSlot = () => {
  return (
    <Box>
    <Grid2 container>
      <Grid2 >
      <LocaleSwitcher />
      </Grid2>
    </Grid2>
    </Box>
  )
}

export default MUIToolbarActionsSlot
