import {useState, useEffect} from 'react'



const quoteURL = "https://api.taylor.rest"
const imgURL = "https://api.taylor.rest/image"

export default function TaylorState() {
    const [count, setCount] = useState(0)
    const [img, setImage] = useState("")
    const [quote, setQuote] = useState("")

    const upCount = () => setCount(count + 1)
    const downCount = () => setCount(count - 1)


    const fetchQuote = () => {
        fetch(quoteURL)
         .then(response => response.json())
         .then(quote => setQuote(quote.quote))
    }

    const fetchURL = () => {
        fetch(imgURL)
         .then(response => response.json())
         .then(image => console.log(image.url))
    }
     
    useEffect(() => {
        fetchQuote()
        fetchURL()
    }, [count])

    return [quote, upCount, downCount, img, count]
}
