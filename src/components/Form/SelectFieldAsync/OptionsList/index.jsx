import OptionString from "./OptionString";
import OptionObject from "./OptionObject";

/* OptionsList checks option type for each array item; if we could be sure
   the type was consistent throughout each array it would be more performant 
   to check just the first array item and assume for the rest
*/

export default function OptionsList({ options, selectName }) {
  if (!options) return null;

  return (
    <>
      {options.map((o, i) => {
        if (typeof o === "string") {
          return (
            <OptionString key={`select-${selectName}-option-${i}`} o={o} />
          );
        }
        if (typeof o === "object") {
          return (
            <OptionObject key={`select-${selectName}-option-${i}`} o={o} />
          );
        }
      })}
    </>
  );
}
