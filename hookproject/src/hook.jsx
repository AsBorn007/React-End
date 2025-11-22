import { useState } from 'react'


function Hook1s(){
    let [count, setCount] = useState(15);
    return (
        <>
        <h1>Hello Hooks</h1>
        <h2>React me hooks hume functional components ke andar functionality aur state ko control karne me help karte hain. </h2>
        <h2>In the React js hooks help us contorl the fuctionslity or the state of the components </h2>


        <h3>Counter Project Value1 : {count}</h3>
        <h3>Counter Project Value2 : {count}</h3>
        <h3>Counter Project Value3 : {count}</h3>
        <div className="btns">
             <button className="addValue" onClick={()=> {
                 if( count < 20 ){
                    setCount(count + 1)}}}>
                    ADD VALUE : {count}
                </button>


<button className="addValue" onClick={() => {
           if ( count < 20 ){
		   setCount(count + 1)
		   }}}>add vlaue</button>
                
             <button className="subValue"  onClick={()=> {
                if ( count > 0){
                    setCount(count - 1)
                }
             }}>SUB VALUE : {count}</button>
        </div>
        </>
    )
}

export default Hook1s