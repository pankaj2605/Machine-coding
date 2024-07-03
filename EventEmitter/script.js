class EventEmitter{
  constructor(){
    this.events={}
  }



on(event,listener){
  if(!this.events[event]){
    this.events[event]=[]
  }
  this.events[event].push(listener);
}

off(event, listenerToRemove) {
  if (!this.events[event]) return;

  this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
}

emit(event, data) {
  if (!this.events[event]) return;

  this.events[event].forEach(listener => listener(data));
}
}

const eventEmitter = new EventEmitter();

// / Function to handle button clicks
const handleButtonClick = () => {
eventEmitter.emit('buttonClicked', { message: 'Button was clicked!' });
};

// Function to handle the custom event and update the UI
const handleButtonClickedEvent = (data) => {
const messageElement = document.getElementById('message');
messageElement.textContent = data.message;
};

// Register the event listener
eventEmitter.on('buttonClicked', handleButtonClickedEvent);

// Add event listener to the button
const button = document.getElementById('myButton');
button.addEventListener('click', handleButtonClick);