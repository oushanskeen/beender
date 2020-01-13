import React,{useState} from 'react';

//let state = [
//        {id:1,status:'unknown'}//,
        //{id:2,status:'unknown'},
        //{id:3,status:'unknown'},
        //{id:4,status:'unknown'},
        //{id:5,status:'unknown'},
        //{id:6,status:'unknown'},
        //{id:7,status:'unknown'},
//    ];
console.log(store);
let Counter = () => {
    let picIds = [1,2,3,4,5,6,7];
    const [id,setId] = useState(picIds[0]);
    //const [id,setId] = useState(state[0].id,state[0].status);
    //const [imgState,setImgState] = useState([state[0].id,state[0].status]);
    let handleLove = () => {
        setId(id+1);
        //setImgState([state[0].id == state[0].id+1,state[0].status == "Love"]);
        //console.log([state[0].id,state[0].status]);
        console.log([id,'Love']);
    };
    let handleHate = () => {
        setId(id+1);
        console.log([id,'Hate']);
        //setImgState([state[0].id == state[0].id+1,state[0].status == "Hate"]);
        //console.log([state[0].id,state[0].status]);
    };
    
    return(
        <div id='gallery'>
            { id === 8  
                ?(
                    <div>FINISH</div>
                 ) 
                : (
                    <div>
                        <button id="hate"
                            onClick={handleHate}            
                        > Hate </button>
                        <span id='counter'> {id} </span>
                        <button id="love" 
                            onClick={handleLove}
                        > Love </button>
                        <div id='currentPos'>{picIds.map(e =>  e===id ? '+ ' : '- ')}</div>
                    </div>
                  )
            }
            <div id='stateLog'>1 : unknown</div>            
        </div>
    );
};

export default Counter;
