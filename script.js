const element = React.createElement(
  'h1', // type
  {
    className: 'title',
    onClick: () => { console.log('clicked'); },
    style: { fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}
  }, // props
  'Hello World!' // children
);

ReactDOM.render(
  element, 
  document.getElementById('root')
);

ReactDOM.render(
  element, 
  document.getElementById('root2')
);

document.querySelectorAll('.button')
  // use querySelector to select all three spans with class "button"
  .forEach(domNode => {
    // use forEach to loop through each of the span DOM node

    // retrieve the message ID from the data attribute through the dataset property
    const messageID = parseInt(domNode.dataset.messageID);

    // create and render a React element for the  button and attach an onClick event handler, it will log the MessageID above
    ReactDOM.render(
      React.createElement(
        'button',
        {
          onClick: () => { console.log(`liked message: ${messageID}`); }
        },
        'Like'
      ),
      domNode
    )
  });