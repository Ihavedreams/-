//什么是 Hook?
//Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。（我们不推荐把你已有的组件全部重写，但是你可以在新组件里开始使用 Hook
//useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

import React, { useEffect, useState } from 'react';

import Axios from 'axios';

// function Example() {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(1);
//   const [data, setData] = useState({ hits: [] });
//   //类似于 componentDidMount 和 ComponentDidUpdate
//   //Update the document title using the browser API
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios('/api' + '/api/list');

//       setData(result.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <p>{count}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         点击
//       </button>
//       <p>{num}</p>
//       <button
//         onClick={() => {
//           setNum(num + 1);
//         }}
//       >
//         点击
//       </button>
//       <ul>
//         {data.dataList &&
//           data.dataList.map((item, index) => {
//             //console.log(item);
//             return <li key={index}>{item.name}</li>;
//           })}
//       </ul>
//     </div>
//   );
// }
// export default Example;
function Exple() {
  const [count, setCount] = useState(0);
  // const [list, setList] = useState(null);
  const [data, setData] = useState([]);
  //更新
  useEffect(() => {
    document.title = `you ${count}`;
  });
  //请求
  useEffect(() => {
    const fecthData = async () => {
      const res = await Axios('/api' + '/api/list');
      console.log(res.data);
      setData(res.data);
    };
    fecthData();
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        添加
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        减少
      </button>
      <ul>
        {data.dataList &&
          data.dataList.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
      </ul>
    </div>
  );
}
export default Exple;
