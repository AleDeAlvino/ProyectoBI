import { port } from '../config/config.js'
import app from './app'

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})