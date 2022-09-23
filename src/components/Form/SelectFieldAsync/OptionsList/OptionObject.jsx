/* assumes that prop o follows the interface
  interface Option {
    name: string,
    abbreviation: string
  }
*/

export default function OptionObject({ o }) {
  // normally would have key, but is handled in OptionsList

  return (
    <option value={o?.name}>
      {o?.name} ({o?.abbreviation})
    </option>
  );
}
