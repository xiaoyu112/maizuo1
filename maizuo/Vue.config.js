module.exports = {
    devServer: {
        open: true, //自动启动浏览器
        proxy: {
            "/api": {
                // http://lh5.loho88.com
               // http://m.maoyan.com"
                target: "https://m.maizuo.com",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
}    
