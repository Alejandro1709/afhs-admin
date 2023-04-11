import Head from "next/head"
import Navigation from "./Navigation";
import Wrapper from "./Wrapper";

type Props = {
  title?: string
  description?: string
  children: React.ReactNode
};

function Layout({ title = 'AFHS Admin', description = 'AFHS API Admin Panel', children }: Props) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <Wrapper>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
      </Wrapper>
    </>
  )
}

export default Layout