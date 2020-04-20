import { server } from './server'
import './database'


server.listen().then(({url}) => {
    console.log(`Server on port ${url}`);
})