'use client'

import { Button } from "@mui/material"

export const DarkmodeButton = () => {
  const changeDarkmode = () => {
    document.querySelector('html')?.classList.toggle('dark')
  }

  return (
    <Button variant="contained" onClick={changeDarkmode}>Dark Mode</Button>
  )
}