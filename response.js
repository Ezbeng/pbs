const response =(StatusCode, data, res) => {
    res.status(StatusCode).json({
        status_code: StatusCode,
        datas: data
    })
}

module.exports=response