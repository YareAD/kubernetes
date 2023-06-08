import gql from 'graphql-tag'

export const GETALLALUMNOS = gql`
  query GETALUMNOS {
    getAlumnos {
      _id
      no_control
      nombre
      apellido_paterno
      apellido_materno
      edad
      genero
    }
  }
`

export const GETAALUMNOBYID = gql`
  query GETAALUMNOBYID($id: ID!) {
    findAlumno(id: $id) {
      _id
      no_control
      nombre
      apellido_paterno
      apellido_materno
      edad
      genero
    }
  }
`
