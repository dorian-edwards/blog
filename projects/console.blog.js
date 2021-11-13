export { consoleBlogDesktop, consoleBlogMobile, blogDesc, bloghref }

const consoleBlogDesktop = {
  src: '/assets/images/BlogDesk.png',
  alt: 'web app screenshot desktop view',
}

const consoleBlogMobile = {
  src: '/assets/images/BlogMobile.png',
  alt: 'web app screenshot mobile view',
}

const blogDesc = (
  <>
    {' '}
    <div>
      Blog web application built with React, React-Router, NodeJS/Express and
      MongoDB. This is my first full-stack application!
    </div>
    <div>
      I went with a mobile first design approach and achieved responsiveness
      with a combination of conditional rendering and media queries.
    </div>
    <div>
      I wrote the backend API with the intention of fully rendering the
      application on client side. I utilize custom error handling and follow the
      JSend specification for serving responses.
    </div>
    <div>
      I also use JSON Web Tokens and HTTP only cookies for security to maintain
      a fully stateless application
    </div>
  </>
)

const bloghref = 'https://console-dot-blog.herokuapp.com'
