export { googleDesktop, googleMobile, googleDesc, googlehref }

const googleDesktop = {
  src: '/assets/images/GoogleDesk.png',
  alt: 'google replication desktop view',
}

const googleMobile = {
  src: '/assets/images/GoogleMobile.png',
  alt: 'google replication mobile view',
}

const googleDesc = (
  <>
    {' '}
    <div>
      Google homepage, fully responsive on most devices, built with HTML and
      CSS. This is an assignment that's part of{' '}
      <a href='https://www.theodinproject.com/' target='__blank'>
        The Odin Project
      </a>
      's{' '}
      <a
        href='https://www.theodinproject.com/paths/foundations'
        target='__blank'
      >
        foundations
      </a>{' '}
      curriculum.
    </div>
    <div>
      It's 'mostly' responsive at the moment as at the time I wrote it, the
      smallest testable size in the Chrome developer tools was 375px. Little did
      I know the Samsung fold has a width as little as 280px!
    </div>
  </>
)

const googlehref = 'https://buddafucofibas.github.io/google-homepage/'
