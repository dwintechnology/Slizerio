import { useEffect, useState } from "react"

function Test() {
    const [data, setData] = useState();
    let [k, setK]= useState()
    useEffect(() => {
        async function foo() {
            // let a = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e81b5d12d52c0de91f235d90e155683c&language=en-US&page=14')
            // let b = await a.json()
            // setData(b)
            // console.log(b)
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e81b5d12d52c0de91f235d90e155683c&language=en-US&page=14')
            .then((a)=>{
                 
                return a.json()
            })
            .then((b)=>{
                setData(b)
                // console.log(b)
            })
            
        }
        foo()
       
        if(data !== undefined){
            console.log(data.results)
            let o = data.results.map((p)=>{
             return (
                 <div>
                     <h1>{p.title}</h1>
                 </div>
             )
           })
           setK(o)
        }        
    },[data])
    // let [k, setK]= useState()
    // useEffect(()=>{
    //     console.log(data.results)
    //      let o = data.results.map((p)=>{
    //       return (
    //           <div>
    //               <h1>{p.title}</h1>
    //           </div>
    //       )
    //     })
    //     setK(o)
    // },[data])
   
    
    return (
        <div>  
            {/* <h1>{data}</h1> */}
            {k}
        </div>
    )
}

export default Test