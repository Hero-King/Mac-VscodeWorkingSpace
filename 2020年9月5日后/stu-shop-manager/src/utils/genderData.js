
export function genderTableData(dataSourceExample, num = 20) {
    let dataSource = [...dataSourceExample];
    if (Array.isArray(dataSourceExample) && dataSourceExample.length > 0) {
        let objExample = dataSourceExample[0];
        for (let index = 1; index <= num; index++) {
            let temp = {}
            for (const key in objExample) {
               if(typeof(objExample[key]) === 'string' ){
                   temp[key] = objExample[key] + index;
               }else if(typeof(objExample[key]) === 'number'){
                temp[key] = objExample[key] + index;
               }else if(typeof(objExample[key]) === 'boolean'){
                temp[key] = !objExample[key] ;
               }
            }
            dataSource.push(temp)
            temp = null;
        }
    }else{
        console.log("传入参数不正确")
    }
    console.log(dataSource)
    return dataSource;
}