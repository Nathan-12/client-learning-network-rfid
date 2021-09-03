<template>
  <div id="app">
    <div class="inputCod">
      <input
        autofocus
        v-model="inputCodigo"
        @keyup="verificarCodigo"
        type="text"
      />
    </div>
    <div class="container">
    <div class="row">
      <div style="margin-left: -100px;" class="col s5"><img class="imagemS" id="tagVideo" src /></div>
      <div class="col s2"></div>
      <div style="margin-left: -100px;" class="col s5"><img class="imagemS" id="tagImg" src/>
      <h3 v-if="confirmacao">Deseja confirmar sua escolha ?</h3></div>
      <h3 v-if="cardErrado">Cartão de confirmação incorreto ! repita o processo</h3></div>
      
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      arquivos: [],
      indice: 0,
      pontuacao: 0,
      srcSet: "",
      srcSetVideo: "",
      inputCodigo: "",
      erros: 0,
      confirmacao: false,
      cardErrado: false,
    };
  },

  created: function() {
    this.atividadeId = this.$route.params.id;
    this.usuarioIdPath = this.$route.params.userId;
    this.initialize();
  },

  methods: {
    respostCorreta() {
      // Use sweetalert2
      this.$swal({
        position: "center",
        icon: "success",
        title: "Resposta correta ! (+2)",
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
    initialize() {
      this.$http
        .get("http://localhost:8091/arquivo/exibir/meios/" + this.atividadeId)
        .then((res) => {
          //const img = document.querySelector("#tagImagem");
          const img = document.querySelector("#tagVideo");
          this.arquivos = res.data;
          this.srcSet = "00" + res.data[this.indice].codigo;
          img.setAttribute("src", "/static/arquivos/meios/" + this.srcSet);
        });
    },
    verificarCodigo(event) {
      if (event.which === 13) {
          const img2 = document.querySelector("#tagImg");
          img2.setAttribute("src", "/static/arquivos/transmissao/" + this.inputCodigo);
        //   this.confirmacao = true;
        //   if(this.inputCodigo == "0010514258") {
        //       console.log("entrou aqui");
        //   } else if (this.inputCodigo == "0010657080") {
        //         console.log("entrou else");
        //   } 
        if (this.srcSet == this.inputCodigo) {
            
          this.pontuacao += 2;
          this.indice++;
            setTimeout(() => this.respostCorreta(), 2500);
            setTimeout(() => this.initialize(), 2500);
            setTimeout(() => img2.setAttribute("src", "/static/arquivos/transmissao/"), 2500);

          if (this.arquivos.length == this.indice) {
            setTimeout(() => this.$router.push(`/atividade-encerrada/${this.atividadeId}/${this.usuarioIdPath}/${this.pontuacao}`), 2500);
          }
        } else {
          this.pontuacao += 0;
          this.indice++;
          setTimeout(() => this.respostErrada(), 2500);
            setTimeout(() => this.initialize(), 2500);
            setTimeout(() => img2.setAttribute("src", "/static/arquivos/transmissao/"), 2500);
         
          if (this.arquivos.length == this.indice) {
            setTimeout(() => this.$router.push(`/atividade-encerrada/${this.atividadeId}/${this.usuarioIdPath}/${this.pontuacao}`), 2500);
          }
        }
        this.inputCodigo = "";
      }
    },
    blockSubmit(event) {
      event.preventDefault();
    },
  },
};
</script>

<style>
.inputCod {
  margin-top: -500px;
}
button {
  margin: 1%;
}

img.imagemS {
    margin-top: 100px;
  width: 500px;
  height: 300px;
}

video.videoAssociacao {
  width: 700px;
  height: 700px;
}

#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #e84e52; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  top: 70px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

#snackbar2 {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #5daf50; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  top: 70px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar2.show2 {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
</style>
