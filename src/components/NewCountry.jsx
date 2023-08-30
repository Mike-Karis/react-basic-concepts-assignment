import React, { Component } from 'react';
class NewCountry extends Component {
    state = {
        showForm: false,
        name: '',
      }
      toggleForm = () => {
        const { showForm } = this.state;
        this.setState({ showForm : !showForm });
        if (showForm) {
          this.setState({ name: '' });
        }
      }
      handleChange = (e) => this.setState({ [e.target.name]: e.target.value});
      saveName = () => {
        const { name } = this.state;
        this.props.onAdd(name);
        this.toggleForm();
      } 
  render() { 
    const { showForm, name } = this.state;
    return (
        <div className='New-word'>
        {
          (showForm) ?
            <form>
              <input 
                type="text"
                id="name"
                name="name"
                value={ name }
                onChange={ this.handleChange }
                placeholder="Name"
                autoFocus
                autoComplete="off" />
              <button 
                disabled={ name.trim().length === 0 } 
                onClick={ this.saveName } 
                type="button">
                Save
              </button>
              <button onClick={this.toggleForm} type="button">Cancel</button>
            </form>
          :
          <button onClick={this.toggleForm} className='Toggle-form'>New Country</button>
        }
      </div>
    );
  }
}
 
export default NewCountry;