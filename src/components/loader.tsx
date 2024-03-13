import loader from '../assets/loader.svg'
export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <img width={60} height={60} src={loader} alt="" />
    </div>
  )
}
