import {useEffect} from "react";

export default function Timer(props) {
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
    
    function clock() {
        let today = new Date()
        let h = addZero(today.getHours());
        let m = addZero(today.getMinutes());
        let s = addZero(today.getSeconds());
        let time = h + ":" + m + ":" + s;
      
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ' ' + time;
        props.setTimer(date)
      }

    useEffect(() => {
        const timerID = setInterval(() => clock(), 1000)
        return () => {
          clearInterval(timerID)
        }
      }, [clock])
}
