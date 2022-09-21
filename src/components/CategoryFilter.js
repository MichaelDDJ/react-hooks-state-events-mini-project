import React from "react";

function CategoryFilter({categories, selectedClass, setSelectedClass}) {

  console.log(categories)

  let btns = categories.map((category) => {
    const class2 = category === selectedClass ? 'selected' : null;
    return <button className={class2} onClick={() => setSelectedClass(category)} key={category}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btns}
    </div>
  );
}

export default CategoryFilter;
