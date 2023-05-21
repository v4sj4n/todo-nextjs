import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await prisma.todo.createMany({
    data: [
      {
        title: 'Finish Runaway',
        completed: false,
        description: 'Finish listening to runaway',
      },
      {
        title: 'Finish Lost in the World',
        completed: false,
        description: 'Finish listening to Lost in the World',
      },
      {
        title: 'Finish So Appalled',
        completed: false,
        description: 'Finish listening to So Appalled',
      },
      {
        title: 'Finish Blame Game',
        completed: false,
        description: 'Finish listening to Blame Game',
      },
    ],
  })
  res.status(200).json({ name: 'hello' })
}
