import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' className='dark'>
        <Head />
            <link href="https://fonts.googleapis.com/css2?family=Licorice&family=Ubuntu+Mono&display=swap" rel="stylesheet"/>
        <body className='bg-gradient-to-tr from-green to-blue' style={{height: "100%", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument