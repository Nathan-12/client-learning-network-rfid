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
      <div class="row"></div>
      <div class="col s2"></div>
      <div class="col s8">
        <!--<video class="videoAssociacao" loop id="tagVideo" width="400px" height="400px">
          <source src />
        </video>-->
        <img id="tagVideo" src />
      </div>
      <div class="col s2"></div>
    </div>

    <div id="snackbar">Resposta Errada</div>
    <div id="snackbar2">Resposta Certa</div>
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
    initialize() {
      this.$http
        .get("http://localhost:8091/arquivo/exibir/" + this.atividadeId)
        .then((res) => {
          //const img = document.querySelector("#tagImagem");
          const img = document.querySelector("#tagVideo");
          this.arquivos = res.data;
          this.srcSet = "00" + res.data[this.indice].codigo;
          img.setAttribute("src", "/static/arquivos/" + this.srcSet);
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
            this.$router.push(`/atividade-encerrada/${this.atividadeId}/${this.usuarioIdPath}/${this.pontuacao}`);
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

img {
  width: 1024px;
  height: 530px;
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
