//import {
//  LOVE,
//  HATE
//} from '../constants/ActionTypes'

import axios from 'axios';

//const [data, setData] = useState({ hits: [] });
//const [data, setData] = useState({});
//useEffect(async () => {
//        const result = await axios(
          //'https://hn.algolia.com/api/v1/search?query=redux',
//        'http://localhost:5000/hello/'
//        );
        //setData(result.data);
//        setData({result.message});
//    });
//    console.log(data);

let hello = async () => {
   try {
     //const resp = await fetch(URL)
     const resp = await axios('http://localhost:5000/hello');
     const data = resp.data;
     console.log('resp : ', resp);
     console.log('data : ', data);
     return data;
   } catch (err) {
        console.log(err)
     }
}

//const hello = async() => (await axios('http://localhost:5000/hello'));
    //.then(result => console.log('result.data : ', result.data)));
    //.then(result => result.data));

const initialState = (window.Cypress && window.initialState) || 
//{message:"Hello World!"}
//hello().then(result => console.log('init state hello : ', result.data));
hello();
/*
[
  {id:"1",status:'unknown'},
  {id:"2",status:'unknown'},
  {id:"3",status:'unknown'},
  {id:"4",status:'unknown'},
  {id:"5",status:'unknown'},
  {id:"6",status:'unknown'},
  {id:"7",status:'unknown'},
];
*/

export default function gallery(state = initialState) {return state};
