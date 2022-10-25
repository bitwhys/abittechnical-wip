import type { NextPage } from 'next'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { Alert, Container } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
    </Container>
  )
}

export default Home
