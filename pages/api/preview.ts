import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>){
    res.setPreviewData({user: 'Chuck'})
    // res.end("Preview mode enabled")
    res.redirect(req.query.redirect as string)
}