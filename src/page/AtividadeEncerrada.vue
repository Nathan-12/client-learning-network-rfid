<template>
  <div class="bodyPage">
    <h1>Fim da atividade !</h1>
    <h1 v-if="abaixo" class="h1titulo">Continue praticando {{usuario.nome}}</h1>
    <h1 v-if="media" class="h1titulo">Nada mau {{usuario.nome}}</h1>
    <h1 v-if="acima" class="h1titulo">Parabéns {{usuario.nome}}</h1>
    <h3>Pontuação: {{usuario.pontuacao}}</h3>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      usuario: [],
      acima: false,
      media: false,
      abaixo: false,
    }
  },
  created: function() {
    this.atividadeId = this.$route.params.id;
    this.usuarioId = this.$route.params.userId;
    this.pontuacao = this.$route.params.pontuacao;

    this.editPontuacao();
  },

  methods: {
    respostCorreta() {
      // Use sweetalert2
      this.$swal({
        position: "center",
        icon: "success",
        title: "Resposta correta ! (+1)",
        showConfirmButton: false,
        timer: 2500,
      });
    },
    respostErrada() {
      // Use sweetalert2
      this.$swal({
        position: "center",
        icon: "error",
        title: "Resposta errada ! (+0)",
        showConfirmButton: false,
        timer: 2500,
      });
    },
    editPontuacao() {
      this.$http
        .put(`http://localhost:8091/arquivo/${this.usuarioId}/${this.pontuacao}`)
        .then((res) => {
          this.usuario = res.data;
          //const img = document.querySelector("#tagImagem");
          //console.log(res);
          if(this.usuario.pontuacao > 5) {
            this.acima = true;
          } else if (this.usuario.pontuacao == 5) {
            this.media = true;
          } else if (this.usuario.pontuacao < 5){
            this.abaixo = true;
          }
        });
    },
    initialize() {
      this.$http
        .get("http://localhost:8091/arquivo/" + this.usuarioId)
        .then((res) => {
          this.usuario = res.data;
        });
    },
    verificarCodigo(event) {
      if (event.which === 13) {
        if (this.srcSet == this.inputCodigo) {
          this.respostCorreta();
          this.pontuacao += 1;
          this.indice++;
          this.initialize();
          if (this.arquivos.length == this.indice) {
            this.$router.push(`/atividade-encerrada/${this.atividadeId}/${this.usuarioIdPath}/${this.pontuacao}`);
          }
        } else {
          this.respostErrada();
          this.pontuacao += 0;
          this.indice++;
          this.initialize();
          if (this.arquivos.length == this.indice) {
            this.$router.push("/atividade-encerrada");
          }
        }
        this.inputCodigo = "";
      }
    },
    blockSubmit(event) {
      event.preventDefault();
    },
  },
}
</script>


<style scoped>
h1, h2, h3 {
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
  color: #42b983;
}
h1.h1titulo{
  color: #42b983;
}
.bodyPage{
  margin-top: 100px;
}
</style>