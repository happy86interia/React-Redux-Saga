import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import actions from '../actions';

import { FilterWrapper } from './filter.style'

const { getColors, getCategories } = actions;

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
      category: [],
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.filterResult(event.target.name, event.target.value);
  };

  render() {
    const { colors, categories } = this.props;

    return (
      <FilterWrapper>
        <Grid className="filterWrapper" item xs={12}>
          <Grid container spacing={24}>
            <Grid item xs={12} className="filterItems">
              <FormControl className="filterItem">
                <InputLabel htmlFor="select-multiple-colors">
                  Colors
                </InputLabel>
                <Select
                  multiple
                  name="colors"
                  value={this.state.colors}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple-colors" />}
                  renderValue={selected => ''}
                >
                  {Object.entries(colors).map(color => {
                    const colorKey = color[0];
                    const colorValue = color[1];

                    return (
                      <MenuItem key={colorKey} value={colorKey}>
                        <Checkbox
                          checked={this.state.colors.indexOf(colorKey) > -1}
                        />
                        <ListItemText className={`colorItem ${colorValue}`} primary={colorValue} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl  className="filterItem">
                <InputLabel htmlFor="select-multiple-categories">
                  Categories
                </InputLabel>
                <Select
                  multiple
                  name="category"
                  value={this.state.category}
                  title="test"
                  onChange={this.handleChange}
                  input={<Input id="select-multiple-categories" />}
                  renderValue={selected => ''}
                >
                  {Object.entries(categories).map(category => {
                    const categoryKey = category[0];
                    const categoryValue = category[1];

                    return (
                      <MenuItem key={categoryKey} value={categoryKey} title={categoryValue}>
                        <Checkbox
                          checked={this.state.category.indexOf(categoryKey) > -1}
                        />
                      <ListItemText primary={categoryValue} />
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </FilterWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors,
    categories: state.categories,
  };
}

export default connect(mapStateToProps, {
  getColors,
  getCategories
})(Filter);
