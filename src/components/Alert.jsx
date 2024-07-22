import { useEffect, useContext } from 'react'
import { ShopContext } from "../context";

const Alert = () => {
  const {alertName, closeAlert} = useContext(ShopContext);
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
       return () => {
        clearInterval(timerId)
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alertName])

  return (
    <div id='toast-container'>
        <div className="toast">Товар "{alertName}" добавлен в корзину</div>
    </div>
  )
}

export default Alert