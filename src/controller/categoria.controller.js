const model = require('../database/models/index');

const getCategorias = async (req, res) => {
  const categoria = await model.Categoria.findAll();
  return res.status(200).json({ categoria });
};

//esta opcion usa el setter que nos provee sequelize
const addCategoria = async (req, res) => {
  const { userId } = req; //me agarro el id que guardo cuando pasa por el middleware
  const user = await model.User.findByPk(userId); // me traigo al usuario que esta haciendo la peticion
  const { name, description } = req.body; // agarro los parametros que envie en el body
  await model.Categoria.create({ name, description, UserId: userId }).then(
    async (createdCategoria) => {
      await createdCategoria.setUser(user); // usamos el setter para asignarle el valor
      return res.status(201).json({ createdCategoria });
    },
  );
};

//esta opcion es mas rapida, agarramos el id del usuario que decodificamos en el token
// y lo enviamos directamente al crear la task
const addCategoriaOpcionA = async (req, res) => {
  const { userId } = req;
  const { name, description } = req.body;
  const inserted = await model.Categoria.create({
    name,
    description,
    UserId: userId, //insertamos el id del usuario directamente al crear la task
  });
  return res.status(201).json({ inserted });
};

const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  await model.Categoria.destroy({ where: { id: id } });
  const categoria = await model.Categoria.findAll();
  return res.status(200).json({ categoria });
};

const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await model.Categoria.update(data, { where: { id: id } });
  console.log(updated);
  const task = await model.Categoria.findByPk(id);
  return res.status(200).json({ task });
};

module.exports = {
  getCategorias,
  addCategoria,
  deleteCategoria,
  updateCategoria,
};
