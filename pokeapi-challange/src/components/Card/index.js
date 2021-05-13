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
      {isActive === id ? 
          <div className={`${namespace}-Card-body-bases`}>
            
            <p className={`${namespace}-Card-body-bases-title`}>
              base stats
            </p>
            <ul>
              <li>Hp : 35</li>
              <li>Attack : 55</li>
              <li>Defense : 40</li>
              <li>Special Attack : 50</li>
              <li>Special Defense : 50</li>
              <li>Speed : 90</li>
            </ul>

          </div> 
      : ''}
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