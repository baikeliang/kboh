export var cases = [];
var totalid = 100;
export function init_repo(){
	var acase = {
    	 userid:10,
    	 type:0,
    	 phone:'13520104532',
    	 doctorname:'nanzhe',
    	 doctorid:0,
    	 clinicname:'欢乐口腔',
    	 clinicid:0,
    	 contact:'18920104532'

    }

   cases = [];

   var index = begin;
   for(let i=0; i<100 ;i++,index++){
   	  acase.id = index;
   	  cases[i] = acase;
   }
}

export function load_success({ begin,num }){

   let _cases = [];

   var index = begin;
   for(let i=0; i<10 ;i++,index++){
   	  _cases[i] = cases[index];
   }

    var ret = {"code" : 0 ,cases:_cases };


	fetchMock.get('http://' + getApiIp() + '/case_patient/rest?'+'num=10&begin='+begin, ret);

}

export function load_fail(){

    var ret = {"code" : 1 };

	fetchMock.get('http://' + getApiIp() + '/case_patient/rest?'+'num=10&begin='+begin, ret);

}

export function load_detail_success({ id }){

    var acase = {id,
    	         meta_data:[
    	         { template_id:'0_0_2_4', main:'牙龈经常出血_____   。  ', currentill:'患者_____   年来早晨刷牙牙龈出血，用清水漱口后可以停止。有时吃东西的时候也会出血，未感觉到有明显的疼痛，前来就诊。刷牙____    次/天，每次____      min，      刷。 ', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ', cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                 { template_id:'0_0_1_2', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ',cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'},
                 { template_id:'1_0_1_3', check:'全口卫生状况_____，  软垢（    ）、色素（   ），牙石（   ），其中下颌前牙舌侧牙石覆盖牙体______。BI普遍2~4，PD≈1~3mm。多颗牙龈缘及龈乳头色深红，肿胀，点彩消失。未探及松动牙，叩诊均未见异常。 ',cure:' 1、向患者交代病情、治疗计划及相关费用，患者知情同意，要求治疗。 2、OHI，3%双氧水含漱半分钟，超声龈上洁治，3%双氧水冲洗，上碘甘油。'}
                 ]
                }

    var ret = { "code" : 0, acase };


	fetchMock.get('http://' + getApiIp() + '/case_patient/detail/rest?'+'id='+id, ret);

}

export function create_detail_success({ newcase }){

    var ret = { "code" : 0 };

    if(size>0){
       newcase.id = totalid;
    }else{
       newcase.id = 0;
    }
    totalid++;
    cases.push({newcase})
	fetchMock.post('http://' + getApiIp() + '/case_patient/detail/rest?', ret);

}


export function update_detail_success({ case_updated }){


    var ret = { "code" : 0 };

    cases = cases.map((_acase)=>{
    	 if(_acase.id == case_updated.id){
             return case_updated;
    	 }else{
    	 	 return _acase
    	 }
    })

	fetchMock.put('http://' + getApiIp() + '/case_patient/detail/rest?', ret);

}


