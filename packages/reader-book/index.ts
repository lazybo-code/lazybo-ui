import LaReaderBook from './src/main.vue';
// @ts-ignore
LaReaderBook.install = (vue) => {
  vue.component(LaReaderBook.name, LaReaderBook);
};
export {
  LaReaderBook
}
export default LaReaderBook;
