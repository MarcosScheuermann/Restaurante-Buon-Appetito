export const validationLogin = (values) =>{
    let errors={}
    if(!values.email){
      errors.email='Campo Email obligatorio.'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errors.email='El email no es válido.';
    } else if(values.email.lenght >30 ){
      errors.email='El email no puede tener más de 30 caracteres.';
    }
    if(!values.password){
      errors.password = 'Campo Contraseña obligatorio.'
    } else if(values.password.lenght < 3 ){
      errors.password='La contraseña no puede tener menos de 3 caracteres.';
    } else if(values.password.lenght > 30 ){
      errors.password='La contraseña no puede tener más de 30 caracteres.';
    }
    return errors;
  }