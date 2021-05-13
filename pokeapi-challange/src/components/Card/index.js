import { namespace } from '../../utils/_namespace'


export function Card({name, image, color, isActive, setIsActive, id}) {
  
  function renderCard(){

    return <div className={`${namespace}-Card ${ isActive === id ? `${namespace}-Card--active` : ``}`} 
    style={
      {
          borderColor: color,
          background : isActive === id ? color : ''
      }}>
    {isActive ? 
      <div 
        onClick={() => setIsActive(-1)}
        className={`${namespace}-Card-close`} />
    : ''}
    <div className={`${namespace}-Card-header`}>
      <p>
        {name}
      </p>
    </div>
    <div className={`${namespace}-Card-body`}>
      <img src={image} alt={`name of ${name}`}/>
    </div>

    {isActive !== id ? 
      <button 
        onClick={()=> setIsActive(id)}
        style={{background: color}}
        >More info</button> 
    : ''}
  </div> 
  }

  return (
    image ? renderCard() : ''
  ) 
}