import * as React from "react";
import { useEffect, useState } from "react";
import { getProductos } from "../services/productos.js";
import CardProducto from "./common/CardProdcuto.jsx";
import { Box, Button, Avatar, Typography, IconButton } from "@mui/material/";
import { getMenu, getfiltro, addCompra, deleteCompra } from "../hooks/useCarrito.js";

import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useContext } from "react";
import { MyContext } from "../context/myContex.js";

import Modal from "@mui/material/Modal";

import CardCarrito from "./common/CardCarrito.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  minHeight: "60vh",
  overflow: "auto",
};

export default function Productos() {
  const [open, setOpen] = useState(false); //variable de estado para controlar el Modal

  const { user, setUser } = useContext(MyContext);

  const [productos, setProductos] = useState({});
  const [menu, setMenu] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [compra, setCompras] = useState([]);
  const [total, setTotal] = useState(0);

  const handleOpen = () => {
    console.log(" opoen modal ");
    setOpen(true);
  }; // funcion para abrir el modal
  const handleClose = () => {
    setOpen(false);
  };


  const handleEliminarProducto = (id) => {
    console.log ( "Eliminar " +  id )
    setCompras(deleteCompra(id))
  }

  const handleCompras = (objeto) => {
    console.log(" objeto compra " + JSON.stringify(objeto));
    setCompras(addCompra(objeto));
  };

  const handleOpcion = (opcion) => {
    console.log(" opcion " + opcion);
    if (opcion == "00") {
      setFiltro(productos);
    } else {
      setFiltro(getfiltro(productos, opcion));
    }
  };
  const handleLoguot = () => {
    setUser(null);
  };

  useEffect(() => {
    let suma = 0
     if (compra.length > 0) {
        compra.map((item)=> {
            suma = suma + (item.cantidad * item.precio)
        })
        setTotal(suma)
     }

  }, [compra])

  useEffect(() => {
    getProductos()
      .then((response) => {
        // console.log (" response componete   " + JSON.stringify(response.data.alldata))
        setProductos(response.data.alldata);
        setFiltro(response.data.alldata);
        setMenu(getMenu(response.data.alldata));
        //console.log (" menu    " + JSON.stringify(getMenu(response.data.alldata)))
      })
      .catch((error) => {
        console.log("Error leer usuarios  " + error);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <IconButton
            aria-label=""
            color="inherit"
            onClick={handleOpen}
            disabled={compra.length > 0 ? false : true}
          >
            <Badge badgeContent={compra.length} color="error">
              <AddShoppingCartIcon sx={{ fontSize: "20" }} color="green" />
            </Badge>
          </IconButton>

          <IconButton
            key={"00"}
            size="large"
            onClick={() => handleOpcion(`00`)}
          >
            <Avatar src={`./iconos/00.svg`} />
          </IconButton>

          {menu.map((item) => (
            <IconButton
              key={item.id_categoria}
              size="large"
              onClick={() => handleOpcion(`${item.id_categoria}`)}
            >
              <Avatar src={`./iconos/${item.id_categoria}.svg`} />
            </IconButton>
          ))}
        </Box>
      
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {productos.length > 0 ? (
          filtro.map((producto) => (
            <CardProducto
              key={producto.idproductos}
              id={producto.idproductos}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              foto={producto.imagen}
              compras={handleCompras}
              

            />
          ))
        ) : (
          <h1> ... CARGADO </h1>
        )}
      </Box>

      {/* INICIO MODAL */}

      <Modal
        style={{ zIndex: "20" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            {compra.map((item) => (
              <CardCarrito key={item.id}
                
                id={item.id}
                nombre={item.nombre}
                descripcion={item.descripcion}
                precio={item.precio}
                foto={item.imagen}
                cantidad={item.cantidad}
                getIdBorrar = {handleEliminarProducto}
                
              />
            ))}
          </Box>
          <Button onClick={handleClose}> Cerrar </Button>

          <Typography sx={{fontWeight: '600' , fontSize: 20 , textAlign: 'right'}}>
            TOTAL COMPRA: {total}
          </Typography>

        </Box>
      </Modal>

      {/* FIN DE MODAL */}
    </Box>
  );
}
