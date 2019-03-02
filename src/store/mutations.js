export default{
  changeCity(state,city){
    state.city = city
    console.log(state.city.title)
    try{
      localStorage.city = city
    }catch (e){}
  },
  userInfo(state,user){
    state.user = user
    console.log(user)
    try{
      localStorage.user = user
    }catch (e){}
  },
  addGoods:(state,data)=>{
    state.goodsList.push(data);
    localStorage.setItem("goodsList",JSON.stringify(state.goodsList));

  },
  deleteGoods(state,index){
    console.log(index)
    state.goodsList.splice(index,1);
    localStorage.setItem("goodsList",JSON.stringify(state.goodsList));
  },
  updateGoods(state,data){
    const {index,key,value}=data;
    state.goodsList[index][key]=value;
    localStorage.setItem("goodsList",JSON.stringify(state.goodsList));
  }

}

