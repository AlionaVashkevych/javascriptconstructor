import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumsBlock} from './classes/blocks'
import {css} from './utils'

const text = `
This site were create by the lessons of <a href="https://youtube.com/c/VladilenMinin" target="_blank">Vladilen Minin</a>.
`

export const model = [
  new TitleBlock('The constructor of sites on pure JS', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to left, #ffc7e6, #493240)',
      color: '#fff',
      paddind: '1.5rem',
      'text-align': 'center'
  
    })
}),
  new ImageBlock(image, {
    styles:'padding: 0 0; display: flex; justify-content: left;',
    alt: 'my image',
    imageStyles: 'width: 300px; height: auto'
  }),
  new TextBlock(text, {
    styles: 'background: linear-gradient(to left, #fefefe, #787878); color: black;text-align:right;height:20px'
  }),
  new TextColumsBlock([
    'You can use this constructor to create your own site',
    'This constructor created with pure JS, with OOP and SOLID principles',
    '1 step: choose and add elements; <br>2 step: click the button; <br>3 step: enjoy'
  ], { 
    styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #deb6f2, #673680);font-weight: bold'
  })
  ]