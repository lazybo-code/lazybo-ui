import {Vue as _Vue} from 'vue-property-decorator';
import LaReaderBook from './src/main.vue';

(LaReaderBook as any).install = (vue: typeof _Vue) => {
  vue.component(LaReaderBook.name, LaReaderBook);
};

export default LaReaderBook;
