var fetchMock = require('fetch-mock');

export function resetMock(){
      fetchMock.reset();
      fetchMock.restore();
}

export function orderinfo_is_valid(id) {
    var response$ = {
        order:{
            relations : 'hghghghgh', 
            clinic_address : 'hjfshdkfhdjkf', 
            clinic_name : 'ssss', 
            doctor_name : 'nanzhe', 
            company_name : 'zte', 
            appointment_name : 'test', 
            contact_tel : '12344542', 
            is_return: 0, 
            patient_name : 'king', 
            service_name :'baya', 
            reserve_number : 'cool', 
            visit_time : '23212', 
            status: 1, 
            id
        },
        "valid":1
    }

   fetchMock.get('http://192.168.10.10/patient/orderInfo/rest?id='+id, response$);
}

export function orderinfo_is_not_valid(id) {
    var response$ = {
        order:{
            relations : 'hghghghgh', 
            clinic_address : 'hjfshdkfhdjkf', 
            clinic_name : 'ssss', 
            doctor_name : 'nanzhe', 
            company_name : 'zte', 
            appointment_name : 'test', 
            contact_tel : '12344542', 
            is_return: 0, 
            patient_name : 'king', 
            service_name :'baya', 
            reserve_number : 'cool', 
            visit_time : '23212', 
            status: 1, 
            id
        },
        valid:0
    };

   fetchMock.get('http://192.168.10.10/patient/orderInfo/rest?id='+id, response$);
}

export function orderinfo_response_error_500(){

    fetchMock.get('http://192.168.10.10/patient/orderInfo/rest?', 500);

}

