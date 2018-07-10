import axios from 'axios'
export var getNewList =()=>{
  return  axios
    .get('../../static/newslist.json')
    .then(res=>res.data)
};
export var getNewList1 =()=>{
  return  axios
    .get('../../static/newslist1.json')
    .then(res=>res.data)
};
