<script setup>
import { computed } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import { resolverGenero } from '../services/Utils'
import { GETALLALUMNOS } from '../services/graphql/querys'
import { DELETEALUMNO } from '../services/graphql/mutations'
import NavBar from '../components/NavBar.vue'

const { result, refetch } = useQuery(GETALLALUMNOS,null,{fetchPolicy:"no-cache"})

const alumnos = computed(() => result.value?.getAlumnos ?? [])
const delAlumno = useMutation(DELETEALUMNO)

const eliminar = async (id) => {
  delAlumno
    .mutate({ id })
    .then(() => {
      refetch()
    })
    .catch(() => {
      alert('Ha ocurrido un error al eliminar el alumno')
    })
}
</script>
<template>
  <NavBar />
  <main>
    <div class="bg-light p-5 rounded">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No. Control</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Edad</th>
            <th scope="col">Género</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{
              _id: id,
              no_control,
              nombre,
              apellido_paterno,
              apellido_materno,
              edad,
              genero
            } in alumnos"
            :key="id"
          >
            <th scope="row">{{ no_control }}</th>
            <td>{{ nombre }}</td>
            <td>{{ apellido_paterno }}</td>
            <td>{{ apellido_materno }}</td>
            <td>{{ edad }}</td>
            <td>{{ resolverGenero(genero) }}</td>
            <td>
              <div class="d-flex gap-3">
                <router-link :to="'/editar/' + id">
                  <button type="button" class="btn btn-warning" id="btnEditar">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </router-link>
                <button type="button" class="btn btn-danger" id="btnEliminar" @click="eliminar(id)">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
