const Card = () => {
    return (
      <div className="bg-white rounded-lg shadow px-4 py-5">
        <div className="animate-pulse flex space-x-2">
          <div className="rounded-full bg-gray-200 h-10 w-10"></div>
          <div className="flex-1 flex-col space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    )
  }
    
  export default Card;