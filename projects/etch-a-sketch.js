export { etchDesk, etchMobile, etchDesc, etchhref }

const etchDesk = {
  src: '/assets/images/etchDesk.png',
  alt: 'Desktop view of etch-a-sketch application. There is a crude drawing of a Last of Us like character drawn in black, white, and gray with a concave shading of random rainbow colors in the bottom right corner of the screen',
}

const etchMobile = {
  src: '/assets/images/etchMobile.png',
  alt: 'Mobile view of etch-a-sketch application. There is a crude drawing of a Last of Us like character drawn in black, white, and gray with a concave shading of random rainbow colors in the bottom right corner of the screen',
}

const etchDesc = (
  <>
    {' '}
    <div>
      Etch-a-Sketch, fully responsive on most devices, built with HTML, CSS and
      Javascript. This is an assignment that's part of{' '}
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
      This project was a delightful exercise in responsive design, and DOM
      manipulation. I even picked up a little CSS trick where, in order to
      maintain a perfect responsive square, one designs a container with a
      specific width, no height, and sets the bottom-padding to 100%. The
      padding being proportionate to the width will constantly expand/shrink
      with the width to achieve this effect.
    </div>
    <div>
      I gave the container a position of relative and placed another container
      of the same size within with a position of absolute. In this container,
      using the flex display, I drew my grid.
    </div>
    <div>
      To achieve the draw effect I used the mouseover event listener on the
      drawing board itself rather than a mouseenter event on each individual
      cell, which, I imagine would be more taxing.
    </div>
  </>
)

const etchhref = 'https://dorian-edwards.github.io/etch-a-sketch/'
