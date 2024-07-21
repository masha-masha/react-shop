import { useEffect } from 'react'

const Alert = ({ name, closeAlert }) => {

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
       return () => {
        clearInterval(timerId)
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

  return (
    <div id='toast-container'>
        <div className="toast">Товар "{name}" добавлен в корзину</div>
    </div>
  )
}

export default Alert