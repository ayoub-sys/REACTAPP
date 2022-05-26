
import { createTheme } from '@mui/material'
import {green,purple} from '@mui/material/colors'
import React from 'react'

export const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
