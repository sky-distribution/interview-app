import fetch from 'node-fetch'

export const getTodos = () => fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
