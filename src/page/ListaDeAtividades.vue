<template>
  <div id="app">
    <div class="containerr">
      
      <table class="responsive-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome da atividade</th>
            <th>Assunto da atividade</th>
            <th>Começar atividade</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="atividade of atividades" :key="atividade.id">
            <td>{{ atividade.id }}</td>
            <td>{{ atividade.nome }}</td>
            <td>{{ atividade.tipoAtividade }}</td>
            <td>
              <button
                class="waves-effect green darken-4 btn-small"
                @click="verFiles(atividade)"
              >Iniciar Atividade</button>
            </td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      atividades: []
    };
  },

  created: function() {
    this.$http.get("http://localhost:8091/api/listar").then(res => {
      this.atividades = res.data;
    });
  },

  methods: {
    verFiles(atividade) {
      if (atividade.tipoAtividade == "PROTOCOLOS_DE_REDE") {
        this.$router.push("/usuario/" + atividade.id);
        this.$router.go();
      }
      else if (atividade.tipoAtividade == "MEIOS_DE_TRANSMISSAO") {
        this.$router.push("/usuario/" + atividade.id);
        this.$router.go();
      }
    }
  }
};
</script>

<style>
div.containerr {
  margin-left: 100px;
  margin-right: 100px;
}
h6.observacao{
  margin-right: -300px;
}
</style>