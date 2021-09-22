import React , {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Bubbles = () => {

    const [showBubbles, setShowBubbles] = useState(false)
    const [datas, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://ds-06-deployment-marialouisee.vercel.app/headlines");
        const res = await response.json();
        setData(res)

      };
      fetchData();
    }, [showBubbles]);


    const getRandom = () =>{
      return Math.floor(Math.random() * datas?.length)
    }
   
    console.log(datas[0])
    return (
        <div>
            <button onClick={()=> {setShowBubbles(!showBubbles)}}>SHOW BUBBLE</button>
            <div className='position'>
                {datas[getRandom()]?.data.map((item, index) => <div className='bubble' key={uuidv4()} >{item}</div>) }
            </div>
        </div>
    )
}

export default Bubbles
