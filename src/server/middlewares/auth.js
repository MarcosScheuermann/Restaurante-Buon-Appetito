const jwt = require('jsonwebtoken');

exports.checkToken = (req,res,next) =>{
  const token = req.header('x-auth-token');
if(!token){
	return res.status(400).json({ok:false, mensaje:'Token no válido'});
}
  try {
    const {id} = jwt.verify(token,process.env.SECRET_KEY);
  if(!id){
	return res.status(400).json({ok:false, mensaje:'Token no válido'})
	}
	req.id = id;
	next();
  } catch (error) {
    console.log(error.message);
	if(error.message === 'jwt expired'){
	res.status(400).json({mensaje:'Token expirado'});
}
	res.status(500).json({mensaje:'Error en el servidor'});
  }
}

exports.checkUser = (req,res,next) =>{
  if(Object.keys(req.body).length === 0){
    res.status(404).json({msj:'Tu peticion esta mal'})
  }else{
    next();
  }
}

// const objetito = {}

// Object.keys(objetito).length = 0



//MENSAJE HTTP
// METHOD: 
// HEAD: token
// BODY: