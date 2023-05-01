import PropTypes from 'prop-types';
import { SearchLabel, SearchInput } from './Filter.styled';

export const Filter = ({ onChangeFind, value }) => (
  <SearchLabel>
    Find contacts by name:
    <SearchInput
      type="text"
      value={value}
      onChange={onChangeFind}
    ></SearchInput>
  </SearchLabel>
);

Filter.propTypes = {
  onChangeFind: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};