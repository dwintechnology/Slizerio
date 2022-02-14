import { useEffect, useState } from "react"

function Test() {
    const [data, setData] = useState();
    const [itemsTitle, setItemsTitle] = useState();
    let buttonsArr = [];


    useEffect(() => {
        async function foo() {
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=e81b5d12d52c0de91f235d90e155683c&language=en-US&page=1')
                .then((a) => { return a.json() })
                .then((b) => { setData(b) })
        }
        foo()

    }, [])
    useEffect(() => {
        if (data !== undefined) {
            console.log(data)
            let items = data.results.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.title}</h1>
                    </div>
                )
            })
            setItemsTitle(items)
        }
    }, [data])

    // bottom buttons 
    function crateButtons() {
        let buttonsArrLength = buttonsArr.length;
        buttonsArr.length = buttonsArrLength + 10;
        buttonsArr = buttonsArr.fill(1)
        buttonsArr = buttonsArr.map((el, index) => { return el + index })
    }
    crateButtons()

    let DrawButtons = buttonsArr.map((el, index) => {
        return (
            <div key={index} onClick={(e) => {
                function foo() {
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e81b5d12d52c0de91f235d90e155683c&language=en-US&page=${e.target.textContent}`)
                        .then((a) => { return a.json() })
                        .then((b) => { 
                            let results = b.results
                            let dataCopy = JSON.parse(JSON.stringify(data))
                            results.forEach(element => {
                                dataCopy.results.push(element)
                            });
                            console.log(dataCopy);
                            setData(dataCopy)
                        })
                }
                foo()
            }}>{el}</div>
        )
    })
    // bottom buttons 

    return (
        <div>
            {itemsTitle}
            {DrawButtons}
        </div>
    )
}

export default Test