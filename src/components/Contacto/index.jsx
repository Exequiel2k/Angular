import styles from './contacto.module.scss'

const Contacto = () => {
  return (

   
    <div className={styles.container}>
      <div className={styles.datosContacto}>
        <h2>DATOS DE CONTACTO</h2>
      </div>
      <h1>CONTACTO</h1>
       <form action="">
          <input type="text" />
          <label htmlFor="">Nombre y Apellido</label>

          <input type="email" />
          <label htmlFor="">Correo Electronico</label>

          <input type="text" />
          <label htmlFor="">Domicilio</label>

          <textarea name="" id="" cols="30" rows="10"></textarea>

          <input type="submit" value="Enviar" />





       </form>
        </div>

  )
}

export default Contacto