<template>
  <div id="app">
    <div class="inputCod">
    </div>
    <div class="container">
      <div class="row"></div>
      <div class="col s2"></div>
      <div class="col s8">
        <!--<video class="videoAssociacao" loop id="tagVideo" width="400px" height="400px">
          <source src />
        </video>-->
        <h5>Digite seu nome:</h5>
        <input
        id="nomeUser"
        autofocus
        v-model="inputCodigo"
        type="text"
      />
      
      <button
                class="waves-effect green darken-4 btn-small"
                @click="initialize()"
              >Salvar</button>
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
      usuario: [],
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
  },

  methods: {
      addUserProtocolo() {
          this.$http
        .post(`http://localhost:8091/arquivo/${this.inputCodigo}/${this.atividadeId}`)
        .then((res) => {
            this.usuario = res.body;
            var usuarioId = res.body.id;
          this.$router.push("/protocolos/" + this.atividadeId + "/" + usuarioId);
        });
      },

      addUserMeiosTransmissao() {
          this.$http
        .post(`http://localhost:8091/arquivo/meios/${this.inputCodigo}/${this.atividadeId}`)
        .then((res) => {
            this.usuario = res.body;
            var usuarioId = res.body.id;
            this.$router.push("/meios-transmissao/" + this.atividadeId + "/" + usuarioId);
        });
      },

    initialize() {
      this.$http
        .get(`http://localhost:8091/arquivo/name/${this.inputCodigo}`)
        .then((res) => {
          if(res.body.atividade)
          this.usuario = res.body;
          if(this.atividadeId == 1) {
            //Ativididade de protocolos
            if(this.usuario.length !== 0) {
              this.$router.push("/protocolos/" + this.atividadeId + "/" + this.usuario.id);
              this.$router.go();
            } else {
                this.addUserProtocolo();
            }
          } else if (this.atividadeId == 2) {
            if(this.usuario.length !== 0) {
                this.$router.push("/meios-transmissao/" + this.atividadeId + "/" + this.usuario.id);
                this.$router.go();
            } else {
                this.addUserMeiosTransmissao();
            }
          }
        });
    },
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
