import fetch from 'node-fetch'

export const getTodos = () => fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())

export const getUsers = () => fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
