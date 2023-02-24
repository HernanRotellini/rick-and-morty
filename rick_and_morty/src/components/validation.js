export const validate = (userData) => {
    let errors = {};
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regex = /^(?=.*[0-9]).{6,10}$/;
    
    // Validar que el nombre de usuario (correo electrónico) no esté vacío
    if (!userData.username) {
      errors.username = 'El nombre de usuario es requerido';
    }
  
    // Validar que el nombre de usuario (correo electrónico) sea un email válido
    if (!pattern.test(userData.username)) {
      errors.username = 'Ingrese un correo electrónico válido';
    }
  
    // Validar que el nombre de usuario (correo electrónico) no tenga más de 35 caracteres
    if (userData.username.length > 35) {
      errors.username = 'El nombre de usuario no puede tener más de 35 caracteres';
    }
    
    if (!regex.test(userData.password)) {
        errors.password = 'Contraseña incorrecta';
      }
    return errors;
  };