import React from 'react';
import '../App.css';
import useForm from 'react-hook-form';

const Formulario = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const { firstName, lastName, email, birthdate, address } = data;

    alert(`${firstName} ${lastName} ${email} ${birthdate} ${address}`);
  };

  return (
    <div className='App'>
      <form className='App-Form' onSubmit={handleSubmit(onSubmit)}>
        <h2>Ingresa tus datos</h2>
        <input
          className='App-Form-Item'
          required
          placeholder='Nombre'
          name='firstName'
          ref={register}
        />
        <input
          className='App-Form-Item'
          required
          placeholder='Apellido'
          name='lastName'
          ref={register}
        />
        <input
          className='App-Form-Item'
          required
          placeholder='Correo'
          type='email'
          name='email'
          ref={register}
        />
        <input
          className='App-Form-Item'
          required
          type='date'
          name='birthdate'
          ref={register}
        />
        <input
          className='App-Form-Item'
          required
          type='text'
          placeholder='Dirección'
          name='address'
          ref={register}
        />
        <button className='App-Form-Item' type='submit'>
          {'Enviar Datos'}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
