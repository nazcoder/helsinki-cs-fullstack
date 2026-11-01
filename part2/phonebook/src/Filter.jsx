function Filter({ filter, setFilter }) {
  return (
    <div>
      <span>filter shown with</span>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter names"
      />
    </div>
  );
}

export default Filter;
