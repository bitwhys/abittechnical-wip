import type { NextPage } from 'next'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { Alert, Container, Skeleton } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </Container>
  )
}

export default Home
