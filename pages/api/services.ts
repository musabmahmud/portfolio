"import/no-anonymous-default-export";
import { NextApiRequest, NextApiResponse } from "next";
import {services} from '../../data';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    return res.status(200).json({services})
}