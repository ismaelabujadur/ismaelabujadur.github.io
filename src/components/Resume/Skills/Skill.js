import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ data, categories }) => {
  const { category, title } = data;

  // TODO: Consider averaging colors
  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  return (
    <div className="skill clearfix">
      <div className="skill-title" style={titleStyle}><span>{title}</span></div>
    </div>
  );
};

Skill.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skill.defaultProps = {
  categories: [],
};

export default Skill;
