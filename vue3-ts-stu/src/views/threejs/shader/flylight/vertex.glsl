precision lowp float;



varying vec4 vPosition;
varying vec4 gPosition;
void main(){
    vec4 modelPosition = modelMatrix * vec4( position, 1.0 );

    vPosition = modelPosition;  // 世界坐标
    gPosition = vec4( position, 1.0 );  // 局部坐标
    gl_Position =  projectionMatrix * viewMatrix * modelPosition;
    

}

