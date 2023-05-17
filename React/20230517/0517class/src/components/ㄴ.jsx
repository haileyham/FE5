const xhr = new XMLHttpRequest;
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    console.log(xhr.responseText)
  }
}
xhr.open('get','url',true);
xhr.send()


fetch()
  .then((response)=>{
    return response.json()
  })
  .then((결과)=>{
    console.log(결과)
  })
  .catch((error)=>{
    console.log(error)
  })


  fetch()
  .then((response)=>{
    if(!response.ok){
      throw new Error('에러난는디용')
    }
    return response.json()
  })
  .then((결과)=>{
    console.log(결과)
  })
  .catch((error)=>{
    console.log(error)
  })