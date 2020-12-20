import Head from 'next/head'

import Panel from '~/components/Panel'

export default function Home() {
  return (
    <Panel>
      <Head>
        <title>Title App</title>
      </Head>
      <h1>Hello World</h1>
    </Panel>
  )
}
