var projects = [ { name:'洗牙',id:0,relations:[4,5] },{ name:'根管治疗',id:1, relations:[5,6] },{ name:'冠修复',id:2, relations:[4,5] },{ name:'拔牙',id:3, relations:[4,6] } ]
var categorys = [ { name:'复杂冠折',id:4,relations:[7,8] }, { name:'牙髓炎',id:5, relations:[8,9] }, { name:'根尖牙周炎',id:6,relations:[8,9] }  ]
var subcategorys = [ { name:'根尖囊肿',id:7 },{ name:'慢性根尖牙周炎',id:8 },{ name:'急性根尖牙周炎',id:9 }]
export var totalid = 10;

export function load_success(){

    var ret = {
    	code: '0',
    	projects,
        categorys,
        subcategorys
    }
    fetchMock.get('http://' + getApiIp() + '/case_patient/caseindex/rest?', ret);
}

export function create_project_success({ name }){

    let size = projects.length;
    var ret = {
        code: '0',
        id:totalid
    };

    projects.push({ name , id:totalid })

    totalid++;
    fetchMock.post('http://' + getApiIp() + '/case_patient/caseindex/project/rest?', ret);
}

export function create_category_success({ parentid, name }){

    var ret = {
        code: '0',
        id:totalid
    }

    categorys.push({ name , id:totalid })
    totalid++;
    fetchMock.post('http://' + getApiIp() + '/case_patient/caseindex/category/rest?', ret);
}

export function create_subcategory_success({ parentid, name  }){

    var ret = {
        code: '0',
        id:totalid
    }

    subcategorys.push({ name, id:totalid });
    totalid++
    fetchMock.post('http://' + getApiIp() + '/case_patient/caseindex/subcategory/rest?', ret);
}

export function update_project_success({ stubid, parentid, name  }){


    var ret = {
        code: '0',
        id:stubid
    }

    projects = projects.map((project) => {
        if(project.id == stubid){
             project.name = name;
             return project;
        }
        return project;
    })

    fetchMock.put('http://' + getApiIp() + '/case_patient/caseindex/subcategory/rest?', ret);
}

export function update_category_success({ stubid, parentid, name  }){

    var ret = {
        code: '0',
        id:stubid
    }


    categorys = categorys.map((category) => {
        if(category.id == stubid){
             category.name = name;
             return category;
        }
        return category;
    })

    fetchMock.put('http://' + getApiIp() + '/case_patient/caseindex/subcategory/rest?', ret);
}

export function update_subcategory_success({ stubid, parentid, name  }){

    var ret = {
        code: '0',
        id:stubid
    }
    subcategorys = subcategorys.map((subcategory) => {
        if(subcategory.id == stubid){
             subcategory.name = name;
             return subcategory;
        }
        return subcategory;
    })

    fetchMock.put('http://' + getApiIp() + '/case_patient/caseindex/subcategory/rest?', ret);
}





