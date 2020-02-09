import Button from './src/main.vue'

Button.install = (vue) => {
  vue.component(name, Button)
};

export default Button
