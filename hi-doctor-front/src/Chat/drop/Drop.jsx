import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
               <input type="text" placeholder='asd'/>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
                <div></div>
                  
            )
        }
      </div>
    );
  }
}

export default Card