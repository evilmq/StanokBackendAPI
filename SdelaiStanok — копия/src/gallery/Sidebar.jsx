// Sidebar.jsx
import React, { useState, useEffect } from 'react';
import './Sidebar.css'

const Sidebar = ({ onSearch, onTagFilter, galleryItems, selectedTags }) => {
  const [tags, setTags] = useState({});
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    const allCategories = new Set();
    const uniqueTags = {};

    galleryItems.forEach((item) => {
      item.tags['$values'].forEach((tag) => {
        allCategories.add(tag.categoryName);
        if (!uniqueTags[tag.categoryName]) {
          uniqueTags[tag.categoryName] = {};
        }
        if (!uniqueTags[tag.categoryName][tag.tagName]) {
          uniqueTags[tag.categoryName][tag.tagName] = 0;
        }
        uniqueTags[tag.categoryName][tag.tagName]++;
      });
    });

    setTags(uniqueTags);
    setCategories(Array.from(allCategories));

    let initialOpenCategories = {};
    allCategories.forEach(category => {
      initialOpenCategories[category] = false;
    });
    setOpenCategories(initialOpenCategories);

  }, [galleryItems]);

  const toggleCategory = (categoryName) => {
    setOpenCategories(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  const handleTagChange = (event) => {
    const tag = event.target.value;
    onTagFilter(
      event.target.checked 
        ? [...selectedTags, tag]  // Add tag if checked
        : selectedTags.filter((t) => t !== tag) // Remove tag if unchecked
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="search">
          <h3>Поиск</h3>
          <input
            
            type="text"
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>

        <div>
          {categories.map((category) => (
            <div className='categ-item' key={category}>
              <div className="side-line"></div>
              <h4 className='categ-header' onClick={() => toggleCategory(category)} style={{ cursor: 'pointer' }}>
                {category} {openCategories[category] ? '▾' : '▸'}
              </h4>
              {openCategories[category] && (
                <div className='tags'>
                  {Object.entries(tags[category] || {}).map(([tagName, count]) => (
                    <div className='tag' key={tagName}>
                      <input
                        className='checkBox'
                        type="checkbox"
                        id={tagName}
                        value={tagName}
                        // Use selectedTags from props
                        checked={selectedTags.includes(tagName)} 
                        onChange={handleTagChange}
                      />
                      <label  htmlFor={tagName}> <span className='tag-name'>{tagName}</span><span className='tags-count'>{'\u00A0'} ({count})</span></label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;