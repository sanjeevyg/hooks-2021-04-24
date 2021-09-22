import {useState, useEffect} from 'react'



// const quoteURL = "https://api.taylor.rest"
// const imgURL = "https://api.taylor.rest/image"

export default function TaylorState(initialCount) {
    const [count, setCount] = useState(initialCount)
    // const [img, setImage] = useState("")
    const [quote, setQuote] = useState("")
    
    const upCount = () => setCount(count + 1)
    const downCount = () => setCount(count - 1)
    
    const imgURL = `https://web-series-quotes.herokuapp.com/generate/gameofthrones/${count}/image?src=gameofthrones&size=150&color=lightyellow`
    // const imgURL = "https://web-series-quotes.herokuapp.com/gameofthrones"

    const fetchQuote = () => {
        setQuote(imgURL)
    }

    console.log(quote)

    

    // const fetchURL = () => {
    //     fetch(imgURL)
    //      .then(response => response.json())
    //      .then(image => setImage(image))
    // }
     
    useEffect(() => {
        fetchQuote()
        // fetchURL()
    }, [count])

    return [ upCount, downCount, count, quote ]
}
