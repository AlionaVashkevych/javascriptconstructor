export const model = [
    {type: 'title', value: 'The constructor of sites on pure JS', options: {
      tag: 'h2',
      styles: 'background: linear-gradient(to left, #ffc7e6, #493240);color: #fff;text-align:center;'
    }},
    {type: 'text', value: 'This site were create by the lessons of <a href="https://youtube.com/c/VladilenMinin" target="_blank">Vladilen Minin</a>.', options: {
      styles: 'background: linear-gradient(to left, #fefefe, #787878); color: black;text-align:right;height:20px'
    }},
    {type: 'textColumns', value: [
      'You can use this constructor to create your own site',
      'Easy to creation your own site with the simple steps',
      '1 step: choose and add elements; <br>2 step: click the button; <br>3 step: enjoy'
    ], options: { 
      styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #deb6f2, #673680);font-weight: bold'
    }},
    {type: 'image', value: 'some picture', options: {
      styles: 'padding: 2rem 0;display: flex;justify-content: center;',
      alt: 'my image'
    }}
  ]