const inputclass = `rounded-md border border-blue p-2 mb-3 mt-2 text-sm 
placeholder:text-black shadow-md shadow-blue focus:outline focus:outline-blue focus:outline-2`;
const inputclassHidden = `invisible -z-50 absolute bottom-0 left-0 `;
const errclass = 'text-redish font-bold text-center';
const btnclass = `flex flex-wrap place-self-center font-bold m-2 p-1 rounded bg-white disabled:bg-opacity-95 
shadow-md shadow-blue items-center hover:text-white hover:bg-black cursor-pointer`;
const lblClass = `text-white font-bold`;
const styledIconTextTxt = `font-bold m-1 p-1 rounded bg-white disabled:bg-opacity-95 
shadow-md shadow-blue items-center hover:text-white hover:bg-black mr-2 cursor-pointer select-none`;
//const styledIconTextTxt =
//('drop-shadow-custom-m-gray font-bold pl-2 hover:shadow-md hover:shadow-blue rounded-md text-black bg-white pr-2 mr-2');
const styledIconTextIco =
  'fill-black mb-1 translate-y-1 drop-shadow-custom-sm-blue';

export const defaultStyleIconText = {
  iconClass: styledIconTextIco,
  txtClass: styledIconTextTxt,
  size: 18,
};

export {
  inputclass,
  inputclassHidden,
  errclass,
  btnclass,
  lblClass,
  styledIconTextIco,
  styledIconTextTxt,
};
