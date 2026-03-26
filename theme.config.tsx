export default {
  logo: <span>Truyện của Nhi</span>,

  project: {
    link: 'https://github.com',
  },

  components: {
    h1: ({ children }) => {
      return (
        <h1
          style={{
            textAlign: 'justify',
            fontSize: '26px',
            fontWeight: '700',
            margin: '30px 0 20px'
          }}
        >
          {children}
        </h1>
      )
    }
  }
}
