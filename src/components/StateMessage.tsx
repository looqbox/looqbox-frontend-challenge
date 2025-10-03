export const StateMessage = ({
  img,
  alt,
  text,
  color,
}: {
  img: string
  alt: string
  text: string
  color: string
}) => (
  <div className="flex-1 flex items-center justify-center flex-col gap-6">
    <img src={img} alt={alt} className="max-h-32" />
    <p className={`${color} text-lg font-bold`}>{text}</p>
  </div>
)
