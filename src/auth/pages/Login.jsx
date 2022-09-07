import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/marvel', {
      replace: true
    })
  }
  return (
    <div className='w-full h-screen bg-slate-300 flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-[80%] max-w-[350px] px-5 py-2 flex flex-col justify-center items-center gap-3'>
        <div className='form-control-wrapper'>
          <label className='form-label' htmlFor="mail">Correo electrónico</label>
          <input type="email" className='form-input' />
        </div>
        <div className='form-control-wrapper'>
          <label className='form-label' htmlFor="password">Contraseña</label>
          <input type="password" id='password' className='form-input' />
        </div>
        <div className='w-full flex justify-center'>
            <button className='w-[64] h-[38px] px-2 text-white font-bold rounded-xl hover:bg-slate-200'>
              Ingresar 
            </button>
        </div>
      </form>
    </div>
  )
}
