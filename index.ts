import server from './server'

server(3000).then(() => {
  console.log('exited')
}).catch((e) => {
  console.error('error', e)
})
