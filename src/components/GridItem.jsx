import PropTypes from "prop-types";
const GridItem = ({ id, title, url }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 "
      key={id}
    >
      <img className="w-full h-3/5 object-cover" src={url} alt={title} />
      <div className="p-3">
        <h2 className="mb-2 text-2xl font-medium  tracking-tight ">{title}</h2>
        <p className="text-gray-700 mb-12">
          Made by <span className="font-bold"> </span>, its called as {title}
        </p>
      </div>
    </div>
  );
};

GridItem.propTypes = {
  id: PropTypes.number,
};

export default GridItem;
