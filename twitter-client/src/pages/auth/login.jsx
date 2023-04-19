const Login = () => {
    return (
        <section className='flex items-center justify-center w-screen h-screen bg-black animate-fade-in'>
          <form className='flex flex-col justify-center items-center gap-y-4 w-1/3 h-2/3 rounded-2xl border border-borderColor text-white opacity-0 animate-slower-fade-in'>
            <div className='flex justify-center items-center w-11/12 my-8 divide-x-2 divide-gray'>
              <img 
                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" 
                className='w-1/5 px-2' 
                alt="twitter.png" />
              <span className='text-3xl lg:text-4xl xl:text-5xl px-2 font-thin'>Login</span>
            </div>
            <input type="text" placeholder='Email' 
              className='w-3/4 lg:w-2/3 p-3 py-2 xl:py-4 xl:text-2xl rounded-xl'
             />
            <input type="text" placeholder='Password' 
              className='w-3/4 lg:w-2/3 p-3 py-2 xl:py-4 xl:text-2xl rounded-xl'
             />
            <button className='my-2 lg:my-8 xl:my-12 p-4 px-8 xl:p-8 xl:px-12 xl:text-2xl rounded-xl bg-primary hover:bg-hoverColor text-lg font-medium'>Login</button>
          </form>
        </section>
    )
}

export default Login