import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
//import HomePage from '../components/Home'
import CadastroAtividadePage from '../page/CadastroAtividade' 
import CadastroOkPage from '../page/CadastroOk' 
import AdicionarArquivoPage from '../page/AdicionarArquivo'
import ListaDeAtividadesPage from '../page/ListaDeAtividades'
import AssociacaoPage from "../page/Associacao"
import ProtocoloPage from "../page/Protocolos"
import MeiosTransmissaoPage from "../page/MeiosTransmissao"
import VFPage from "../page/VF"
import UsuarioPage from '../page/AdicionarUsuario.vue'
import FilesCadastradosPage from "../page/FilesCadastrados" 
import AtividadeEncerradaPage from "../page/AtividadeEncerrada" 
import ArquivosPorAtividadePage from "../page/ArquivosPorAtividade"
import AdicionarArquivoVFPage from "../page/AdicionarArquivoVF"
//import FirstRoute from '@/components/FirstRoute'
//import FirstRouteChild from '@/components/FirstRouteChild'

Vue.use(Router)

export default [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/cadastro",
    name: "CadastroAtividade",
    component: CadastroAtividadePage
    },
  {
    path: "/cadastro-ok",
    name: "CadastroOk",
    component: CadastroOkPage 
  },
  {
    path: "/atividade-encerrada/:id/:userId/:pontuacao",
    name: "AtividadeEncerrada",
    component: AtividadeEncerradaPage
  },
  {
    path: "/adicionar-arquivo/:id",
    name: "AdicionarArquivo",
    component: AdicionarArquivoPage
  },
  {
    path: "/listar-atividades",
    name: "ListaDeAtividades",
    component: ListaDeAtividadesPage
  },
  {
    path: "/associacao/:id",
    name: "Associacao",
    component: AssociacaoPage
  },
  {
    path: "/usuario/:id",
    name: "Usuario",
    component: UsuarioPage
  },
  {
    path: "/protocolos/:id/:userId",
    name: "Protocolo",
    component: ProtocoloPage
  },
  {
    path: "/meios-transmissao/:id/:userId",
    name: "MeiosTransmissao",
    component: MeiosTransmissaoPage
  },
  {
    path: "/vf/:id",
    name: "VF",
    component:VFPage
  },
  {
    path: "/arquivos/:id",
    name: "ArquivosPorAtividade",
    component: ArquivosPorAtividadePage
  },
  {
    path: "/files-cadastrados",
    name: "FilesCadastrados",
    component: FilesCadastradosPage
  },
  {
    path: "/adicionar-arquivos-vf/:id",
    name: "AdicionarArquivoVF",
    component: AdicionarArquivoVFPage
  }
];