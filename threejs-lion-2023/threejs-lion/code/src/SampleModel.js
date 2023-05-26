export class SampleModel {
	constructor(info = {}) {
		this.scene = info.scene;
		this.gltfLoader = info.gltfLoader;
		this.width = info.width || 1;
		this.height = info.height || 4;
		this.depth = info.depth || 0.2;
		this.scale = info.scale || 2;

		this.x = info.x || 0;
		this.y = info.y || this.height * 0.5; //바닥에서 높이 반만큼 올리려고
		this.z = info.z || 0;

		this.modelSrc = info.modelSrc;

		this.rotationY = info.rotationY || 0; //처음에 돌아가있는 정도 조정 가능

		this.gltfLoader.load(
			this.modelSrc,
			glb => {
				// console.log(glb)
				// 안전하게 그림자 만들기
				glb.scene.traverse(child => {
					if (child.isMesh) {//mesh가 true면 그림자 설정해줘
						child.castShadow = true;
					}
				});

				this.mesh = glb.scene.children[0];
				this.mesh.scale.set(this.scale, this.scale, this.scale);
				this.mesh.castShadow = true;
				this.mesh.rotation.y = this.rotationY;
				this.mesh.position.set(this.x, this.y, this.z);
				this.scene.add(this.mesh);
			}
		);
	}
}
