<script setup>
// import {ro} from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" id="titulo" to="/">Kubernetes</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link disabled">Docker</a>
          </li>
        </ul>
        <form class="d-flex">
          <router-link class="btn btn-outline-success" to="/agregar">Agregar</router-link>
        </form>
      </div>
    </div>
  </nav>
</template>
