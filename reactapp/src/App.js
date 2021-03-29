import './App.css';

  addItem = async(e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.title !== '') {
      const response = await fetch('https://app.serverless.com/tikiridiasena/apps/todo-app/todo/dev/us-east-1', {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'todo',
        },
        body: JSON.stringify({title: newItem.title}),
        method:'POST'
      });
      const json = await response.json();
      const items = this.state.items;
      items.unshift(json);
      this.setState({ items: items });
      this.inputElement.value = '';
    }
  }

render() {
  return (
    <div>
      <input
          placeholder="Submit todo"
          ref={c => {
            this.inputElement = c;
          }}
          value={this.state.currentItem.text}
          onChange={this.handleInput}
      />
      <button onClick={this.addItem}>Add Task</button>
    </div>
  );
}

export default App;
