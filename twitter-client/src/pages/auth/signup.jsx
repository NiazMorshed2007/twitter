const SignUp = () => {
    return <section className='flex items-center justify-center w-screen h-screen bg-black animate-fade-in'>
    <form className='flex flex-col justify-center items-center gap-y-4 w-1/3 h-9/10 rounded-2xl border border-borderColor text-white opacity-0 animate-slower-fade-in'>
      <div className='flex justify-center items-center w-11/12 my-4 mt-8 divide-x-2 divide-gray'>
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          className='w-1/5 px-2'
          alt="twitter.png" />
        <span className='text-3xl lg:text-4xl xl:text-4xl px-2 font-thin'>Sign Up</span>
      </div>
      <input type="text" placeholder='Your Name'
        className='w-3/4 lg:w-2/3 p-3 py-2 xl:py-4 xl:text-2xl rounded-xl' />
      <input type="text" placeholder='Email'
        className='w-3/4 lg:w-2/3 p-3 py-2 xl:py-4 xl:text-2xl rounded-xl' />
      <input type="text" placeholder='Password'
        className='w-3/4 lg:w-2/3 p-3 py-2 xl:py-4 xl:text-2xl rounded-xl' />
      <input type="text" placeholder='Confirm Password'
        className='w-3/4 lg:w-2/3 p-3 py-2 xl:py-4 xl:text-2xl rounded-xl' />
  
      <div className='flex items-start justify-center gap-x-1 xl:gap-x-2'>
        <span className='text-lg mt-0.5 lg:mt-0 xl:mt-3 lg:text-lg xl:text-2xl'>Or Sign Up with:</span>
        <img src="https://logopng.com.br/logos/google-37.png"
          className='w-1/12 self-start hover:bg-hoverColor p-2 lg:p-1.5 hover:rounded-full'
          alt="google.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
          className='w-1/12 self-start hover:bg-hoverColor p-2 lg:p-1.5 hover:rounded-full'
          alt="facebook.png" />
      </div>
  
      <button className='p-4 px-8 xl:p-7 xl:text-xl rounded-xl bg-primary hover:bg-hoverColor text-base font-medium'>Sign Up</button>
  
      <div className="h-1/5">
        <a className="text-sm hover:text-blue-300">Already have an account?</a>
      </div>
    </form>
  </section>;
}

export default SignUp