import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>){
    res.clearPreviewData()
    res.end("Preview mode is disabled")
}