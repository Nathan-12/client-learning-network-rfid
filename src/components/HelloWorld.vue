<template>
  <div class="container">
    <h1>Bem vindo(a) !!!</h1>
    
    <div class="col s12 m6">
      <div class="card grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Este sistema usa um dispositivo leitor RFID
          para proporcionar uma interação do usuário com o sistema, em um contexto
          de ensino de conceitos básicos de Redes de Computadores.
           </span>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {}
  },
  methods: {
        verFiles(){
          this.$router.push("/files-cadastrados");
          this.$router.go();
        }
      }
}
</script>


<style scoped>
button{
  margin-left: 30px;
}
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #199655;
}
</style>