// @flow // $FlowIssue flow doesn't know hook
import React, { useState, Children } from 'react'
import isPlainObject from './util/isPlainObject'
import Context from './Context'

type Props = {
  store: Object,
  children: React$Node
}

export default function Provider(props: Props) {
  const { store } = props

  if (!isPlainObject(store)) {
    throw new Error('muriatic: Expected the Store to be a PlainObject')
  }

  // "tmpStore" role is avoid name collision "store"
  const [tmpStore, setState] = useState(store)

  const setStore: Function = (state: Object) => {
    if (!isPlainObject(state)) {
      throw new Error(
        'muriatic: Expected the setStore() argument to be a PlainObject'
      )
    }

    setState(tmpStore => {
      return { ...tmpStore, ...state }
    })
  }

  return (
    <Context.Provider
      value={{
        store: tmpStore,
        setStore
      }}
    >
      {Children.only(props.children)}
    </Context.Provider>
  )
}
