import { namespace } from '../../utils/_namespace'


export function Card({name, image, color}) {
  
  function renderCard(){

    return <div className={`${namespace}-Card`} style={{background: color}}>
    <div className={`${namespace}-Card-header`}>
      <p>
        {name}
      </p>
    </div>
    <div className={`${namespace}-Card-body`}>
      <img src={image} alt={`name of ${name}`}/>
    </div>
  </div>
  }

  return (
    image ? renderCard() : ''
  ) 
}