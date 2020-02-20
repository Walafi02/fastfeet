import React, { memo } from 'react';
// import _get from 'lodash/get'

// import { Container } from './styles';

// export default function renders() {
const TextRender = memo(({ data, column }) => {
  return <span>ok</span>;
});

export default TextRender;

// import React, { memo } from 'react'
// import i18n from 'amdi18n-loader!../nls/renders'

// const TextRender = memo(({ data, column }) => {
//   const text = _get(data, column.field)

//   return text
//     ? (
//       <span title={text}>
//         {text.length > 25 ? `${String(text).slice(0, 25)}...` : text}
//       </span>
//     ) : (
//       <span className='text-xs text-muted'>
//         <i>{i18n.unavailable}</i>
//       </span>
//     )
// })

// export default TextRender
