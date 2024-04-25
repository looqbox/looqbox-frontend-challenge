export default function fetchGenderRate(genderRate: number) {
  switch (genderRate) {
    case 0:
      return (
        <div>
          <span>
            100% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            0% <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 1:
      return (
        <div>
          <span>
            87.5% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            12.5%{' '}
            <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 2:
      return (
        <div>
          <span>
            75% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            25% <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 3:
      return (
        <div>
          <span>
            62.5% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            37.5%{' '}
            <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 4:
      return (
        <div>
          <span>
            50% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            50% <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 5:
      return (
        <div>
          <span>
            37.5% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            62.5%{' '}
            <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 6:
      return (
        <div>
          <span>
            25% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            75% <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 7:
      return (
        <div>
          <span>
            12.5% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            87.5%{' '}
            <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    case 8:
      return (
        <div>
          <span>
            0% <img style={{ width: '15px' }} src={`male.png`} alt='male-icon'></img>
          </span>
          <span>
            {' '}
            100%{' '}
            <img style={{ width: '15px' }} src={`female.png`} alt='female-icon'></img>
          </span>
        </div>
      )
    default:
      return <span>Loading...</span>
  }
}
