var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();

/*xhr.onload=function(){
   var data = JSON.parse(xhr.response);
   console.log(data);
    let countries=data.filter(function(region){
        if(region.region=="Asia"){
            console.log(region.name);
        }
   })
}*/
/*xhr.onload=function(){
     var data = JSON.parse(xhr.response);
    console.log(data);
    let countries=data.filter(function(region){
        if(region.population<200000){
            console.log(region.name);
        }
    })
}*/
/*xhr.onload=function(){
    var data = JSON.parse(xhr.response);
   console.log(data);
   data.forEach(details => {
    console.log(details.name)
    console.log(details.capital)
    console.log(details.flag)
   });
    
}*/
/*xhr.onload=function(){
    var data = JSON.parse(xhr.response);
   console.log(data);
   for(var i=0; i<data.length; i++){
       if(data[i].currencies.name='United States dollar'){
        console.log(data[i].name);
       }  
}
}*/
xhr.onload=function(){
    var data = JSON.parse(xhr.response);
   console.log(data);
   let popx=[]
   for(var i=0; i<data.length; i++){
    popx.push(data[i].population)
    }  
    //console.log(popx);
   let totalp=popx.reduce((prev, cur) => {
   return (prev+cur)
   })
   console.log(totalp)
}
/*xhr.onload=function(){
    var data = JSON.parse(xhr.response);
   console.log(data);
   let sum=0
   for(var i=0; i<data.length; i++){
       if(data[i].population!=0){
           sum=sum+data[i].population
       }
   }console.log(sum);
}*/

