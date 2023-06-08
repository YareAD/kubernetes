<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuery, useMutation } from '@vue/apollo-composable'

import { GETAALUMNOBYID } from '../services/graphql/querys'
import { EDITALUMNO } from '../services/graphql/mutations'
import NavBar from '../components/NavBar.vue'

const route = useRoute()
const router = useRouter()

const alumno = reactive({
  id: -1,
  no_control: '',
  nombre: '',
  apellido_paterno: '',
  apellido_materno: '',
  edad: '',
  genero: ''
})

const { onResult, onError: onErrorFindAlumno } = useQuery(GETAALUMNOBYID, {
  id: route.params.id
})

const {
  mutate: editarAlumno,
  onError,
  onDone
} = useMutation(EDITALUMNO, () => {
  const { id, ...rest } = alumno
  return {
    variables: { id, data: rest }
  }
})

onError(() => {
  alert('Ha ocurrido un error')
})

onDone(() => {
  router.push('/')
})

onResult(({ loading, data }) => {
  if (!loading) {
    const {
      apellido_materno,
      apellido_paterno,
      edad,
      genero,
      no_control,
      nombre,
      _id: id
    } = data.findAlumno
    Object.assign(alumno, {
      apellido_materno,
      apellido_paterno,
      edad,
      genero,
      no_control,
      nombre,
      id
    })
  }
})

onErrorFindAlumno(() => {
  router.push('/')
})

const actualizar = async () => {
  editarAlumno()
}
</script>

<template>
  <NavBar />
  <div class="container">
    <main>
      <div class="py-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
          alt=""
          width="72"
          height="57"
        />
        <h2>Editar</h2>
      </div>

      <hr class="my-4" />
      <div class=" ">
        <div class="">
          <h4 class="mb-3">Datos</h4>
          <form class="needs-validation" @submit.prevent="actualizar($event)">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="lastName" class="form-label">No. Control</label>
                <input
                  v-model="alumno.no_control"
                  type="text"
                  class="form-control"
                  placeholder="17520228"
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>

              <div class="col-sm-6">
                <label for="firstName" class="form-label">Nombre</label>
                <input
                  v-model="alumno.nombre"
                  type="text"
                  class="form-control"
                  placeholder="Yare"
                  required
                />
                <div class="invalid-feedback">Valid first name is required.</div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Apellido Paterno</label>
                <input
                  v-model="alumno.apellido_paterno"
                  type="text"
                  class="form-control"
                  placeholder="Araujo"
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Apellido Materno</label>
                <input
                  v-model="alumno.apellido_materno"
                  type="text"
                  class="form-control"
                  placeholder="Delgado"
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Edad</label>
                <input
                  v-model="alumno.edad"
                  type="text"
                  class="form-control"
                  placeholder="25"
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Género</label>
                <select required class="form-select" v-model="alumno.genero">
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </select>
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>

              <hr class="my-4" />

              <button class="w-50 btn btn-outline-warning btn-lg botonEditar" type="submit">
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2023 Instituto Tecnológico Nacional de México - Campus Chilpancingo</p>
    </footer>
  </div>
</template>
