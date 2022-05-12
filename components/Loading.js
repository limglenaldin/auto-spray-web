const Loading = () => {
    return (
      <div className="flex flex-col items-center min-h-screen">
          <span className="text-4xl mt-56 animate-spin"><i className="bi bi-hourglass"></i></span>
          <p className="text-lg animate-bounce mt-4">Memuat...</p>
      </div>
    )
  }
    
  export default Loading;