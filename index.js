export { default as theme } from './src/themes/theme';

import introduction from './src/introduction.mdx';
import tableOfContent from './src/table_content.mdx';
import whoIsIt from './src/who_is_it.mdx';
import one from './src/intro.1.mdx';
import two from './src/intro.2.mdx';

export default [...introduction, ...tableOfContent, ...whoIsIt, ...one, ...two];
