import { type NextApiRequest, type NextApiResponse } from 'next';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ name: 'John Doe' });
};

export default handler;
