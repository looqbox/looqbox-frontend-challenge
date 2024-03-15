import loader from '../assets/loader.svg'

type LoaderProps = {
  height?: number
  width?: number
}
export const Loader = ({ height, width }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <img width={height || 60} height={width || 60} src={loader} alt="" />
    </div>
  )
}
