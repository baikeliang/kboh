var fetchMock = require('fetch-mock');

export function resetMock(){
      fetchMock.reset();
      fetchMock.restore();
}

export function auth_success() {
    //var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    var token = "kjhuih";
    var ret$ = {
        username: "king",
        valid: 1,
        token
    };

    //backdate a jwt 30 seconds
    fetchMock.get('http://192.168.10.10/userinfo/rest?', ret$);


}

export function auth_not_valid(){

    var token = "kjhuih";
    var ret$ = {
        username: "king",
        valid: 0,
        token
    };


    fetchMock.get('http://192.168.10.10/userinfo/rest?', ret$);

}

export function error500(){

	fetchMock.get('http://192.168.10.10/userinfo/rest?', 500);
}


