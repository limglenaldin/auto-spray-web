const Card = ({icon, title, value, unit=null, linked=false}) => {
    return (
      <div className="flex items-center px-4 py-5 bg-white rounded-lg shadow">
        <div className="text-3xl">
          <i className={'bi ' + icon}></i>
        </div>
        <div className="pl-4">
          <div className="font-semibold">{ title }</div>
          <div className="text-sm">{ value } { unit ? unit : null }</div>
        </div>
        {
          linked ?
            <div className="ml-auto">
              <div className="text-3xl">
                <i className='bi bi-chevron-right'></i>
              </div>
            </div>
          :
            linked
        }
      </div>
    )
  }
  
  export default Card;