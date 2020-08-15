import React from "react";
import { CardList } from "./components/card-list/Card-list.component";
import { SearchBox } from "./components/search-box/search.component";
import { setSearchField, fetchData } from './redux/search.actions';
import { connect } from 'react-redux';
import "./App.css";
const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(setSearchField(e.target.value)),
  onFetchDta: () => dispatch(fetchData)

});
const mapStateToProps = state => ({
  searchField: state.search.searchField,
  monsters: state.monsterElement.monsters,
  isPending: state.monsterElement.isPending,
  error: state.monsterElement.error
});

class App extends React.Component {

  componentDidMount() {
    this.props.onFetchDta();
  }





  render() {

    const { searchField, handleChange, monsters, isPending, error } = this.props;

    const filtermonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        {
          isPending
            ? <h1>Landing</h1>

            : (
              <div>
                <SearchBox placeholder="search a monster" handleChange={handleChange} />
                <CardList monsters={filtermonsters} />
              </div>
            )

        }





      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
