import * as React from "react";
import { useEffect, useState } from "react";

// import PicUser from './common/PicUser'
// import DataUser from './common/DataUser'
import {Paper, Typography, Box, Button} from '@mui/material/';

import { useRef } from "react";
import { useForm } from "react-hook-form";

import {setUser} from "../services/apiUsuario"


export default function  Registro () {

    const [msj, SetMsj] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
      } = useForm({
        defaultValues: {
          id: "",
          nombre: "",
          correo: "",
          password: "",
          foto: "",
         
        },
      });


      const onSubmit = handleSubmit((data) => {

          console.log(" Formulario ..... " + JSON.stringify(data));

          let objeto = JSON.stringify({
            "id_usuario":data.id,
            "nombre_usuario": data.nombre,
            "correo_usuario": data.correo,
            "clave_usuario": data.password,
            "foto_usuario":data.foto
            });
     
          console.log("objeto ... " + objeto);
          
          setUser(objeto)
            .then((response) => {
              //console.log("datos loginUser ... " + JSON.stringify(response));
              console.log(" resposne " + response.status);
              if (response.status) {
                console.log(" Usuario creado con exito ");
                SetMsj("Usuario creado con exito");
                
              } else {
                
                SetMsj("Error al crear el usuario  ");
                console.log(" Error al crear el usuario  ");
                //return null;
              }
            })
            .catch((error) => {
              console.log(error);
            });
      
          //-----------
          
          reset();


        });
          
        //data.preventDefault()

        
      
        //-----------
           
     /*
       
      };
   */
    
  return (
    <Box sx={{ width: "100%", display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>

        <Typography> {msj} </Typography>
        <form onSubmit={onSubmit}>
        <Box sx={{ margin: "0.25rem", width: '100%' , display: 'flex' ,  }}>
          <Box sx={{ width: '40%' }}>  <label>ID:</label> </Box>
          <Box sx={{ width: '60%' }}> 
          <input
            type="text"
            name="ID"
            {...register("id", {
              required: {
                value: true,
                message: "id es requerido",
              },
              maxLength: 10,
              minLength: 4,
            })}
          />
          {errors.id?.type === "required" && <span>ID requerido</span>}
          {errors.id?.type === "maxLength" && (
            <span>ID no debe ser mayor a 10 caracteres</span>
          )}
          {errors.id?.type === "minLength" && (
            <span>ID debe ser mayor a 4 caracteres</span>
          )}
          </Box>
        </Box>

        <Box sx={{ margin: "0.25rem", width: '100%' , display: 'flex'}}>
          <Box sx={{ width: '40%' }}>  <label>Nombre y Apellido:</label> </Box>
          <Box sx={{ width: '60%' }}> 
          <input
            type="text"
            name="nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "nombre es requerido",
              },
              maxLength: 50,
              minLength: 10,
            })}
          />
          {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
          {errors.nombre?.type === "maxLength" && (
            <span>Nombre no debe ser mayor a 50 caracteres</span>
          )}
          {errors.nombre?.type === "minLength" && (
            <span>nombre debe ser mayor a 10 caracteres</span>
          )}
        </Box>
        </Box>


        <Box sx={{ margin: "0.25rem", width: '100%' , display: 'flex'}}>
          <Box sx={{ width: '40%' }}>  <label>Correo Electronico:</label> </Box>
          <Box sx={{ width: '60%' }}> 
        <input
          type="email"
          name="correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}
        </Box>
        </Box>

        <Box sx={{ margin: "0.25rem", width: '100%' , display: 'flex'}}>
          <Box sx={{ width: '40%' }}>  <label>Contraseña:</label> </Box>
          <Box sx={{ width: '60%' }}> 
        <input
          type="password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Contraseña debe ser mayor a 6 caracteres",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        </Box>
        </Box>

        <Box sx={{ margin: "0.25rem", width: '100%' , display: 'flex'}}>
          <Box sx={{ width: '40%' }}>  <label>Foto:</label> </Box>
          <Box sx={{ width: '60%' }}> 

          <input
            type="text"
            name="foto"
            {...register("foto", {
              required: {
                value: true,
                message: "foto es requerido",
              },
             
              minLength: 10,
            })}
          />
          {errors.foto?.type === "required" && <span>foto requerido</span>}
          {errors.foto?.type === "minLength" && (
            <span>foto debe ser mayor a 10 caracteres</span>
          )}
        </Box>
        </Box>


        <Box sx={{ margin: "0.25rem",width: '100%' , display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" type="submit">Enviar</Button>

      
        </Box>
      </form>
      </Box>
  );


}
