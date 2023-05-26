import * as THREE from 'three';

// ----- 주제: 기본 장면 구성
//https://threejs.org/ 참고

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		// canvas: canvas,
		canvas, //위에 변수로 담은 canvas를 렌더할거라고
		antialias: true //이미지를 부드럽게 할건지(기본false:성능때문에)
	});
	renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로 / 브라우저에 꽉 차도록 렌더하겠움
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원 / console창에 window.devicePixelRatio 써보기 / 1보다 크면 2로 해주고, 1보다 작으면 1로 해주도록 셋팅 (2 아니면 1로 셋팅 / 사실 그냥 (2)해도 됨. 각자 환경이 다르기 때문에)
	renderer.shadowMap.enabled = true; // 그림자가 생기도록 / 이건 true로 해야함. 그림자를 쓸거라면 / 조명별로 설정도 가능. 밑에서 spotLight.castShadow = true;에서
	/**
	 * 그림자가 생기려면 조건
	renderer.shadowMap.enabled = true; [renderer]
	spotLight.castShadow = true; [Light]
	floor.receiveShadow = true; [Mesh]
	box.castShadow = true; [box]
	 */

	// ----- Scene
	const scene = new THREE.Scene();//개념적으로 올리는 개념(눈에 보이지 않음)
	// 배경색 설정 / 기본 검정색
	scene.background = new THREE.Color('white');

	// ----- Camera(카메라)
	// 원근 카메라
	const camera = new THREE.PerspectiveCamera(
		75, // 시야각(field of view) / 시야의 폭이 넓어지다보니 가운데가 작게보임
		window.innerWidth / window.innerHeight, // 장면 비율
		0.1, // near(가까이 보이는 한계)
		1000 // far(멀리 보이는 한계)
	);
	camera.position.set(-2, 2, 5); // 카메라 위치
	// camera.position.x = -2;
	// camera.position.y = 2;
	// camera.position.z = 5;
	scene.add(camera);

	// ----- Light(조명)
	// 은은한 조명 / AmbientLight 전체적인 밝기(톤을 결정) 만약 2면은 조명이 너무세서 그림자 표현안됨
	const ambientLight = new THREE.AmbientLight('white', 0.5); // 색상, 강도
	scene.add(ambientLight); //라이트 만들어놓고 달아줘야 함

	// 스팟 조명 / 뮤지컬에서 주인공 퐉 비추는 조명 같은거
	const spotLight = new THREE.SpotLight('white', 0.7); // 색상, 강도
	spotLight.position.set(-2, 5, 3); //조명(그림자) 받는 위치 바꿔줌
	spotLight.castShadow = true; // 그림자를 만들 수 있도록 해줌 / 조명별로 설정
	spotLight.shadow.mapSize.width = 1024; // 그림자 해상도 / 그림자 진하게 / 이건 성능에 영향 많이 미치기 때문에, 숫자 너무 높아지면 안됨(보통 1024,2048 이런식으로 함)
	spotLight.shadow.mapSize.height = 1024;
	scene.add(spotLight); //라이트 만들어놓고 달아줘야 함 / 사실 매개변수로 2개 받을 수 있음, 위의 ambientLight랑 ,로 같이 받아도 되는데 그냥 헷갈리지 않도록 따로 각각 함

	// ----- Mesh / 무대 바닥
	const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(5, 5), //바닥 크기 / 평면형상을 생성하기 위한 클래스
		new THREE.MeshStandardMaterial({ //재질 / 사이트 들어가보면 재질 많음
			color: 'pink' //원하는 색 넣으면 됨
		})
	);
	floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
	floor.rotation.x = -Math.PI * 0.5; // Math.PI는 180도 / 이거 설정안하면 서있는게 기본임 색종이 세워놓듯

	const box = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),  //x,y,z 박스
		new THREE.MeshStandardMaterial({
			color: 'red'
		})
	);
	box.castShadow = true; // 그림자를 만들 수 있도록
	box.position.y = 0.5;

  scene.add(floor, box); // scene에 조립
  renderer.render(scene, camera); // 그리기(렌더링)

	// ----- 캔버스 사이즈를 브라우저 창 사이즈에 맞추기
	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix(); // 카메라 관련 속성이 변하면 실행
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera); //사이즈가 변경됐을때도 렌더를 한번 해줘야함
	}

	// ----- 이벤트
	// 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
	window.addEventListener('resize', setSize);
}
