import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

import { API_BASE } from "@/shared/constants/private";

export default (req: NextApiRequest, res: NextApiResponse) =>
    httpProxyMiddleware(req, res, {
        target: API_BASE,
        pathRewrite: [
            {
                patternStr: "^/api",
                replaceStr: "",
            },
        ],
        changeOrigin: true,
    });

export const config = {
    api: {
        bodyParser: false,
    },
};
