import { StateMessage } from '../components/StateMessage'

function NotFound() {
  return (
    <div className="flex flex-col flex-1">
      <StateMessage
        img="../../public/error-icon.png"
        alt="Error Icon"
        text="Page Not Found"
        color="text-[#a40000]"
      />
    </div>
  )
}

export default NotFound
