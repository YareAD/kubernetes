import gql from 'graphql-tag'

export const CREATEALUMNO = gql`
  mutation CREATEALUMNO($data: AlumnoCreateOrUppdate!) {
    createAlumno(data: $data) {
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

export const EDITALUMNO = gql`
  mutation EDITALUMNO($id: ID!, $data: AlumnoCreateOrUppdate!) {
    updateAlumno(id: $id, data: $data) {
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

export const DELETEALUMNO = gql`
  mutation DELETEALUMNO($id: ID!) {
    deleteAlumno(id: $id)
  }
`
