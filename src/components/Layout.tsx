import Head from "next/head"

type Props = {
  title?: string
  description?: string
  children: React.ReactNode
};

function Layout({ title = 'AFHS Admin', description = '', children }: Props) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout