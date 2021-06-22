import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello World'})
})

app.post('/test', (req, response: Response) => {
  return response.json({ message: 'Hello World POST'})
})

app.listen(3000, () => console.log('Server is running on port 3000!!'))