import {useState, useEffect} from "react";

function App() {
    const [randomDog, setRandomDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then ((data) => {
            setRandomDog(data.message);
            setIsLoaded(true);
            console.log(data);
        });
    }, []);
    if (!isLoaded) return <p>Loading...</p>

    return <img src={randomDog} alt="A Random Dog"></img>
}


export default App;
