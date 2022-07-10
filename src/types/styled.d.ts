// import original module declarations
import 'styled-components';
import { ThemeType } from '../blocks/Theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeType['colors'];
    blocks: ThemeType['blocks'];
    borderRadius: ThemeType['borderRadius'];
  }
}
