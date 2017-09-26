export function getSocketUrl() {
  if (process.env.REACT_APP_NODE_ENV === 'local') {
    return ('ws://127.0.0.1:8000/feed/');
  } else if (process.env.REACT_APP_NODE_ENV === 'production') {
    return ('wss://eldoradoapi.herokuapp.com/feed/');
  } else {
    return 'Error: No feed detected.'
  }
}
