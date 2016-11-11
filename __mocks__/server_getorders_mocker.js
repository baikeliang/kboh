var fetchMock = require('fetch-mock');


export function resetMock(){
      fetchMock.reset();
      fetchMock.restore();
}

export function orders_is_not_empty() {
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

    var orders = [];

    for(var i=0;i<10;i++){
        let order = {
        is_return:0,
        patient_name:'tangxin',
        service_name:'baya',
        reserve_number:'cool',
        visit_time:'23212',
        status:88,
        id:0
        }
        order.id = i;
        orders.push(order)
    }

    var response$ = {
            orders: orders,
            valid: 1
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://192.168.10.10/patient/orders/rest?num=15&begin=0', response$);


}

export function orders_is_empty(){


    var orders = [];


    var response$ = {
            orders: orders,
            valid: 1
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://192.168.10.10/patient/orders/rest?', response$);

}

export function orders_is_not_valid(){


    var orders = [];


    var response$ = {
            orders: orders,
            valid: 0
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://192.168.10.10/patient/orders/rest?', response$);

}



export function orders_response_error_500(){

	fetchMock.get('http://192.168.10.10/patient/orders/rest?', 500);

}


