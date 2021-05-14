import { namespace } from '../../utils/_namespace'

import search from './assets/search.svg'

export function Card({
  name, 
  image, 
  color, 
  isActive, 
  setIsActive, 
  id, 
  stats, 
  japoneseName,
  height,
  weight}) {

  const isActiveCard = isActive === id
  const isInverse  = color === 'yellow' || color === 'white'
  const isInverseColor = { color: isInverse && 'black'}

  function renderListStats() { 
    return stats.map(item => <li>
      <p>{item.stat.name} : {item.base_stat}</p>
    </li>)
  }
  
  function renderCard(){

    return <div className={`${namespace}-Card ${ isActiveCard ? `${namespace}-Card--active` : ``}`} 
      style={{ borderColor: color, backgroundColor : isActiveCard ? color : 'white'}}>
    
    {isActive ? 
      <div 
        style={{ background: color, isInverseColor}}
        onClick={() => setIsActive(-1)}
        className={`${namespace}-Card-close`} />
    : ''}

    <div className={`${namespace}-Card-header`}>
      {isActiveCard ? 
        <p className={`${namespace}-Card-header-id`} style={isInverseColor} >
          #{id}
        </p>
      : ''}

      <p className={`${namespace}-Card-header-name`} style={isInverseColor}>
        {name}
      </p>

      {isActiveCard ? 
        <p className={`${namespace}-Card-header-name-japonese`}>
          {japoneseName}
        </p>
      : ''}

      {isActiveCard ? 
        <>
          <p className={`${namespace}-Card-header-char`} style={isInverseColor}>
            Height : {height}
          </p>
          <p className={`${namespace}-Card-header-char`} style={isInverseColor}>
            Weight : {weight}
          </p>
        </>
      : ''}

    </div>
    <div className={`${namespace}-Card-body`}>

      <div className={`${namespace}-Card-body-img`}>
        <img src={image} alt={`name of ${name}`}/>
      </div>

      {isActiveCard ? 
        <div className={`${namespace}-Card-body-bases-content`}>
          <div className={`${namespace}-Card-body-bases`}>
            <p className={`${namespace}-Card-body-bases-title`} style={isInverseColor}> 
              base stats 
            </p>
            <ul>
              {renderListStats()}
            </ul>
          </div> 
        </div>
      : ''}
      </div>

      {isActive !== id ? 
        <button  onClick={()=> setIsActive(id)} style={{background: color}}>
          <img src={search} alt="more info"/>
        </button> 
      : ''}

  </div> 
  }

  return (
    image ? renderCard() : ''
  ) 
}