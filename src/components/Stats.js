export default function Stats({ itemList }) {
  if (!itemList.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list..📦</em>
      </p>
    );

  const packedNum = itemList.filter((item) => item.packed).length;
  const percentage = Math.round((packedNum / itemList.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got Everything.. Ready to GO 🚀`
          : `💼 You have ${itemList.length} items in your list, and you already packed
        ${packedNum} (${percentage}%)`}
      </em>
    </footer>
  );
}
