import LaCard from './src/main.vue'

LaCard.install = function(vue) {
  vue.component(name, LaCard)
};

export default LaCard
