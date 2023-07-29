const path = require('path');

module.exports = { //선언한 것들 빼내는
    target: 'node',

    entry: Path2D.resolve('./src/index.js'), // entry 배포 전 작업용 자바스크립트 시작점(빌드시작점)
    output: { // 최종 배포용 번들링 파일 설정 / 빌드된 결과물
        filename: 'bundle.js',
        path: path.resolve('./build')
    },

    module: {
        rules: [
            {
                test: /\.js?$/, //정규표현식으로 나타내야함 레귤러익스프레션
                loader: 'babel-loader',//처리할 대상 / 바벨 불러옴
                exclude: /node_modules/, // option으로 추가 이 경로에 있는 것들 건들지마~
                options: {
                    presets: [
                        'react',
                        'stage-0', // JS 최신 문법을 지원해줌 / 아직 실험중인, 제작중인 JS도 사용할 수 있도록
                        ['env', { target: { browsers: ['last 2 versions'] } }] //바벨을 어떤환경에서 구동시킬건지 / 브라우저환경에서 구동시키는데, 모든 브라우저의 최신 2버전 이전까지 지원가능하도록
                    ]
                }
            }
        ]
    }
}