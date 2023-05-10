import MyList from "./components/MyList";

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) => //map을 통해서 생성되는 것들이 형제관계 / Key는 형제 사이에서만 고유하면 됨.
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];



function App() {
  return (
    <div>
      hello world
      {/* <Blog posts={posts}></Blog>
      posts를 Blog에 props로 전달해야 Blog에서 props사용가능하기때문 */}
      <MyList></MyList>
    </div>
  );
}
export default App;

/*Module not found: Error: You attempted to import ../components/MyList which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
You can either move it inside src/, or add a symlink to it from project's node_modules/.

src폴더 내부에 components파일 있어야 됨. (오류뜰 때는 src외부에 폴더 작성)

https://velog.io/@mooongs/React-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EB%A1%9C%EA%B7%B8
*/




// function App() {
//   return (
//     <Hello name="licat"/>
//   );
// }

// function Hello(props) {
// 	const name = props.name;
//   const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
//   // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
//   const numComponentsArray = num.map((i)=><h1>안녕, {name} {i}호</h1>);

//   return(
//     <div>
//       {numComponentsArray}
//     </div>
//   )
// }

// export default App;




//교안의 key 내용
//**"리스트 각 요소가 고유한 key 값을 가지지 않았다."**라는 경고 메세지입니다.  key 값을 넣어주지 않았기 때문에 에러가 발생한 것입니다. 컴포넌트 안에서 리스트를 렌더링할 때는 꼭 key 값을 넣어줘야 합니다. 키값을 넣어주는 이유는 리엑트에서 랜더링 작업을 진행했을 때 어떤 요소에 변동이 있다면 그 요소만 새로 그려주기 위함입니다. key가 없다면 하나의 요소가 변경이 되어도 array에 담긴 요소를 모두 다시 그려줍니다.
//https://paullabworkspace.notion.site/9-2340d41e3ac849ca942996efb9a4bf35
//https://ko.legacy.reactjs.org/docs/lists-and-keys.html#keys
