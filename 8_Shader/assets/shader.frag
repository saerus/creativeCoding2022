#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTexCoord;

// uniform receive values from p5
uniform sampler2D buffer;
uniform vec2 res;
uniform vec2 mouse;

void main() {
  // Calculate "uv", relative to resolution
  float positionX = (gl_FragCoord.x/res.x);
  float positionY = 1.0 - (gl_FragCoord.y/res.y);
  float finalX = positionX;
  float finalY = positionY;
  //
  //
  //
  // Shader 1
  // modify "uv" to create glitch effect
  // finalX = positionX+floor(sin(positionY*3.141*32.0+mouse.x/100.0)*0.2)*0.01;
  // finalY = positionY+floor(sin(positionX*3.141*32.0+mouse.y/100.0)*0.2)*0.01;
  //
  //
  //
  // Shader 2
  // modify "uv" to create glitch effect
  float power = mouse.x/res.x*1.0;
  float rAlongY = (sin(positionY*25.0))/8.0+0.5;
  float steps = power*smoothstep(rAlongY-0.1, rAlongY+0.1, positionX);
  finalX = mix(positionX, rAlongY, steps);
  //
  //
  //
	vec4 color = texture2D(buffer, vec2(finalX, finalY));
  gl_FragColor = color;
}
