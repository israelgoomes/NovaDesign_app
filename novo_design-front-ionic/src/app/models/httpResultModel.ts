//reescrevendo um método httpClient do próprio ionic, para afzer tratamento, se o cara tá conectado ou não, já colocar o loading automaticamente, etc..
export class HttpResultModel{
    //a informação que virá do resultado
    data: any;
    //para ver se já veio com sucesso, ou não (error)
    success: boolean;
    err: any;
}