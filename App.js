import React from 'react'
import './App.css';
import List from './List'


class App extends React.Component{
   state={
     store:this.props.store
   }
  render(){
      return (
      <main class="App">
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">

          {
            this.state.store.lists.map(list=> (
              <List
                key={list.id}
                header={list.header}
                cards={list.cardIds}

              />
            ))
          }
        </div>
      </main>
    );
  }
  
}

export default App;
