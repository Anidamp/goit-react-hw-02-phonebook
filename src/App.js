import './App.css';
import { Component } from 'react';
import {v4 as uuid} from 'uuid';






class App extends Component {
  state = {
    contacts: [] ,
    name: '',
    number: '',

    contact: null,
  }

handleChange =(e) => {
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  });
};

handleSubmit =(e) =>{
  e.preventDefault();
  const obj = {
    name: this.state.name,
    number:this.state.number
  }
  this.setState({contact: obj})
  this.resetForm();
}

resetForm = () => {
  this.setState({ ...this.state });
};

prodIdname = uuid();
prodIdnumber = uuid();
  render() {
    return(
      <><form onSubmit = {this.handleSubmit}>
        <h1>Phonebook</h1>
      <label htmlFor = {this.prodIdname}>Name</label>
      <input
        type="text"
        name="name"
        id = {this.prodIdname}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange ={this.handleChange}
        required />
        <br/>
        <label htmlFor = {this.prodIdnumber}>Number</label>
        <input
        type="tel"
        name ="number"
        id={this.prodIdnumber}
        onChange ={this.handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        />
        <br/>
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contacts</h2>
        <p>{this.state.contacts.name}</p>
        </>
    )
  }
}





export default App;
