// Type definitions for [muriatic] [3.0.5]
// Project: [muriatic]
// Definitions by: [ryota-murakami] <[https://ryota-murakami.github.io]>

/*~ This is the module plugin template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

import { ReactNode, Component  } from 'react'


export interface ProviderProps {
  store: Object
}

export class Provider extends Component<ProviderProps> { }

export function useStore<S>(): [S, Function]


export default Provider
