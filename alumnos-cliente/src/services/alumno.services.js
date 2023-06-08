import axios from 'axios'

export const obtenerTodos = async () => {
  const {
    data: { alumnos }
  } = await axios.get('http://localhost/api/alumno')

  return alumnos
}

export const agregarAlumno = async (alumno) => {
  const { data } = await axios.post('http://localhost/api/alumno', alumno)
  return data.alumno
}

export const buscarAlumno = async (id) => {
  const { data } = await axios.get(`http://localhost/api/alumno/${id}`)
  return data.alumno
}

export const actualizarAlumno = async (id, alumno) => {
  const { data } = await axios.patch(`http://localhost/api/alumno/${id}`, alumno)
  return data.alumno
}

export const eliminarAlumno = async (id) => {
  await axios.delete(`http://localhost/api/alumno/${id}`);
}
