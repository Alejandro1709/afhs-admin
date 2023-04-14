// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'GET') {
    const { data } = await axios.get('https://afhs-api-production.up.railway.app/api/v1/characters')
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const { data } = await axios.post('https://afhs-api-production.up.railway.app/api/v1/characters', req.body)
    res.status(201).json(data)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
