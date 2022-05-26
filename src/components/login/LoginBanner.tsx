
const LoginBanner = () => {

  return (
    <section className='banner banner--bg-palid'>

      <div className='banner__section-1'>
        <p className='banner--p1'>¡NUEVO!</p>
        <p className='banner--p2'>
          Seguro Vehicular <br/>
          <span className='banner--red'>Tracking</span>
        </p>
        <p className='banner--p3'>
          Cuentanos donde le haras<br/>
          seguimiento a tu seguro
        </p>
      </div>

      <div className='banner__section-2'>
        <img src='assets/images/woman-login-md.svg' alt='woman-login' className='banner__img'/>
      </div>

    </section>
  )
}

export default LoginBanner