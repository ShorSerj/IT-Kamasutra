import s from './Like.module.css'

const Like = (props) => {
  return (
    <div className={s.reviews__wrapp}>
      <svg
        width="19"
        height="21"
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.4732 8.10051C12.4732 8.10051 13.8599 6.29726 13.7278 3.74461C13.5737 1.16854 12.4072 0.77042 11.6809 0.864096C10.9545 0.934352 10.8665 3.90854 10.8665 3.90854C10.8665 3.90854 7.43288 6.27385 7.12474 10.5595C6.81659 14.8451 7.12474 19.1542 7.12474 19.1542H16.6112C16.6332 19.1542 16.6552 19.1542 16.6772 19.1542C17.4916 19.1542 18.7241 18.4048 17.7777 16.7889C18.8122 15.9927 18.394 14.4002 17.9538 13.9318C18.7462 13.4634 18.9663 11.8241 17.9538 11.0513C18.9883 10.0443 18.9222 8.49863 17.6897 8.10051C16.4351 7.70239 12.4732 8.10051 12.4732 8.10051Z"
          fill="#788292"
        />
        <path
          d="M5.51799 20.2315H0.983874C0.873822 20.2315 0.763771 20.1378 0.763771 19.9973V10.2316C0.763771 10.0911 0.873822 9.99744 0.983874 9.99744H5.51799C5.62804 9.99744 5.73809 10.0911 5.73809 10.2316V19.9739C5.73809 20.1144 5.65005 20.2315 5.51799 20.2315Z"
          fill="#788292"
        />
      </svg>
      <span className={s.wrapp__counter}>{props.value}</span>
    </div>
  )
}

export default Like
