export default function OptionString({ o, i }) {
  // normally would have key, but is handled in OptionsList
  return <option value={o}>{o}</option>;
}
